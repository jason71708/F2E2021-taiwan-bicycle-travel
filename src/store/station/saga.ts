import { fork, call, put, take, takeEvery, delay } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { stationRequestAction, stationSuccessAction, stationFailureAction, RequestPayload } from '.'
import { fetchBikeStationByCity, required, searchFields } from '../../utils/api/station'
import { transformKeysToFilter, transfromPositionToSpatialFilter } from '../../utils/api'

// fetchBikeStationByCity({ $filter: transformKeysToFilter(required, [{ keyword: '', searchFields }]), city: '' })

function* fetchStationSaga(payload: PayloadAction<RequestPayload>) {
  console.log('fetchStationSaga start')
  yield delay(2000)
  console.log('delay 200')
  yield put(stationSuccessAction({ data: [] }))
  // try {
  //   const { data }: { data: ActivityTourismInfo[] } = yield call(fetchActivities, parameters)
  //   yield put(
  //     fetchActivitiesSuccess({
  //       activities: data
  //     })
  //   )
  // } catch (error: any) {
  //   yield put(
  //     fetchActivitiesFailure({
  //       error
  //     })
  //   )
  // }
}

function* stationSaga() {
  // while (true) {
    // const { payload }: { payload: TDXAPIParameters } = yield take(activityTypes.FETCH_ACTIVITY_REQUEST);
    // yield fork(fetchStationSaga, payload)
    yield takeEvery(stationRequestAction, fetchStationSaga)
  // }
}

export default stationSaga