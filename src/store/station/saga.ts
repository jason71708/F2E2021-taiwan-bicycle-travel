import { call, put, takeLatest } from 'redux-saga/effects'
import { BikeStation, BikeAvailability } from '../../utils/api/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { stationRequestAction, stationSuccessAction, stationFailureAction, RequestPayload, NearByRequestPayload } from '.'
import { fetchBikeStationByCity, fetchBikeStationNearBy, stationRequired, stationSearchFields } from '../../utils/api/station'
import { fetchAvailabilityStationByCity, fetchAvailabilityStationNearBy, availabilityRequired } from '../../utils/api/availability'
import { transformKeysToFilter, transfromPositionToSpatialFilter } from '../../utils/api'
import { geolocationUpdateAction } from '../geolocation'

function* fetchStationSaga({ payload }: PayloadAction<RequestPayload | NearByRequestPayload>) {
  try {
    let stationResponse: { data: BikeStation[] }
    let availabilityResponse: { data: BikeAvailability[] }

    if ('position' in payload) {
      stationResponse = yield call(fetchBikeStationNearBy, {
        $filter: transformKeysToFilter(stationRequired),
        $spatialFilter: transfromPositionToSpatialFilter(payload.position)
      })
      availabilityResponse = yield call(fetchAvailabilityStationNearBy, {
        $filter: transformKeysToFilter(availabilityRequired),
        $spatialFilter: transfromPositionToSpatialFilter(payload.position)
      })
    } else {
      const { keyword, city } = payload
      stationResponse = yield call(fetchBikeStationByCity, {
        $filter: transformKeysToFilter(stationRequired, [{ keyword, searchFields: stationSearchFields }]),
        city
      })
      availabilityResponse = yield call(fetchAvailabilityStationByCity, {
        $filter: transformKeysToFilter(availabilityRequired), city
      })
    }

    const data = stationResponse.data.reduce((result, station) => {
      const index = availabilityResponse.data.findIndex(availability => availability.StationID === station.StationID)
      if (index > -1) {
        result.push(Object.assign(station, availabilityResponse.data[index]))
      }
      return result
    }, [] as (BikeStation & BikeAvailability)[])

    yield put(
      stationSuccessAction({
        data
      })
    )
    if ('position' in payload) {
      yield put(
        geolocationUpdateAction({
          center: payload.position
        })
      )
    } else {
      yield put(
        geolocationUpdateAction({
          center: [data[0].StationPosition.PositionLat, data[0].StationPosition.PositionLon]
        })
      )
    }
  } catch (error: any) {
    yield put(
      stationFailureAction({
        error
      })
    )
  }
}

function* stationSaga() {
  yield takeLatest(stationRequestAction, fetchStationSaga)
}

/**** use take effect case  ****/
// function* stationSaga() {
//   while (true) {
//     const payload: PayloadAction<RequestPayload> = yield take(stationRequestAction)
//     yield fork(fetchStationSaga, payload)
//   }
// }

export default stationSaga