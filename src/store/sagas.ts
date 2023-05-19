import { all, fork, call } from 'redux-saga/effects'
import stationSaga from './station/saga'
import routeSaga from './route/saga'
import { fetchAuthToken } from './authSaga'

export default function* rootSaga() {
  yield call(fetchAuthToken)
  yield all([
    fork(stationSaga),
    fork(routeSaga)
  ])
}