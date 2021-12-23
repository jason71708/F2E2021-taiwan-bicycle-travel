import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { routeRequestAction, routeSuccessAction, routeFailureAction, RequestPayload } from '.'
import { fetchBikeCyclingShapByCity, required, searchFields, searchTownFields } from '../../service/tdxApi/cyclingShape'
import { transformKeysToFilter } from '../../service/tdxApi'

function* fetchRouteSaga({ payload }: PayloadAction<RequestPayload>) {
  try {
    const { keyword, city } = payload
    const { data }: SagaReturnType<typeof fetchBikeCyclingShapByCity> = yield call(fetchBikeCyclingShapByCity, {
      $filter: transformKeysToFilter(required, [{ keyword, searchFields }, { keyword, searchFields: searchTownFields }]),
      city
    })

    yield put(
      routeSuccessAction({
        data
      })
    )
  } catch (error: any) {
    yield put(
      routeFailureAction({
        error
      })
    )
  }
}

function* routeSaga() {
  yield takeLatest(routeRequestAction, fetchRouteSaga)
}

export default routeSaga