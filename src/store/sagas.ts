import { all, fork } from 'redux-saga/effects'
import stationSaga from './station/saga'

export default function* rootSaga() {
  yield all([
    fork(stationSaga)
  ])
}