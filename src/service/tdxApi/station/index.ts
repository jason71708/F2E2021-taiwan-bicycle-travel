import {
  tdxAPI,
  getAuthorizationHeader,
  GeneralParameter,
  SearchByCityParameter,
  NearByParameter,
} from '..'
import { BikeStation } from '../types'

export const stationRequired = [
  'StationID',
  'StationName/Zh_tw',
  'StationPosition/PositionLon',
  'StationPosition/PositionLat',
]
export const stationSearchFields = ['StationName/Zh_tw', 'StationAddress/Zh_tw']

export const fetchBikeStationByCity = ({
  $format = 'JSON',
  $filter,
  city,
}: GeneralParameter & SearchByCityParameter) => {
  return tdxAPI.get<BikeStation>(`/v2/Bike/Station/${city}`, {
    headers: getAuthorizationHeader(),
    params: {
      $format,
      $filter,
    },
  })
}

export const fetchBikeStationNearBy = ({
  $format = 'JSON',
  $spatialFilter,
  $filter,
}: GeneralParameter & NearByParameter) => {
  return tdxAPI.get<BikeStation>(`/v2/Bike/Station/NearBy`, {
    headers: getAuthorizationHeader(),
    params: {
      $format,
      $spatialFilter,
      $filter,
    },
  })
}
