import { call, put, takeLatest } from 'redux-saga/effects'
import { BikeStation, BikeAvailability } from '../../utils/api/types'
import { PayloadAction } from '@reduxjs/toolkit'
import { stationRequestAction, stationSuccessAction, stationFailureAction, RequestPayload } from '.'
import { fetchBikeStationByCity, stationRequired, stationSearchFields } from '../../utils/api/station'
import { fetchAvailabilityStationByCity, availabilityRequired } from '../../utils/api/availability'
import { transformKeysToFilter, transfromPositionToSpatialFilter } from '../../utils/api'

function* fetchStationSaga({ payload: { keyword, city } }: PayloadAction<RequestPayload>) {
  try {
    const stationResponse: { data: BikeStation[] } = yield call(fetchBikeStationByCity, { $filter: transformKeysToFilter(stationRequired, [{ keyword, searchFields: stationSearchFields }]), city })
    const availabilityResponse: { data: BikeAvailability[] } = yield call(fetchAvailabilityStationByCity, { $filter: transformKeysToFilter(availabilityRequired), city })

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