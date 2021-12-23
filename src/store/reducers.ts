import { combineReducers } from 'redux'
import stationReducer from './station'
import geolocationReducer from './geolocation'
import displayTypeReducer from './displayType'
import routeReducer from './route'

const rootReducer = combineReducers({
  station: stationReducer,
  geolocation: geolocationReducer,
  displayType: displayTypeReducer,
  route: routeReducer
})

export default rootReducer