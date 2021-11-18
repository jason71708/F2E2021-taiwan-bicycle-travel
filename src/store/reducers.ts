import { combineReducers } from 'redux'
import stationReducer from './station'

const rootReducer = combineReducers({
  station: stationReducer
})

export default rootReducer