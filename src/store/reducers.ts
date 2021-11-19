import { combineReducers } from 'redux'
import stationReducer from './station'
import geolocationReducer from './geolocation'

const rootReducer = combineReducers({
  station: stationReducer,
  geolocation: geolocationReducer
})

export default rootReducer