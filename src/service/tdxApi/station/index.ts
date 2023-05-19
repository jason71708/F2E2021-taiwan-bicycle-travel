import {
  tdxAPI,
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
  return tdxAPI.get<BikeStation>(`/basic/v2/Bike/Station/City/${city}`, {
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
  return tdxAPI.get<BikeStation>(`/advanced/v2/Bike/Station/NearBy`, {
    params: {
      $format,
      $spatialFilter,
      $filter,
    },
  })
}
