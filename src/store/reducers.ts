import { combineReducers } from 'redux'
import stationReducer from './station'
import geolocationReducer from './geolocation'
import displayTypeReducer from './displayType'

const rootReducer = combineReducers({
  station: stationReducer,
  geolocation: geolocationReducer,
  displayType: displayTypeReducer
})

export default rootReducer