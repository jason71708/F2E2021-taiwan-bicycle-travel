import { all, fork } from 'redux-saga/effects'
import stationSaga from './station/saga'
import routeSaga from './route/saga'

export default function* rootSaga() {
  yield all([
    fork(stationSaga),
    fork(routeSaga)
  ])
}