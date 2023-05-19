import {
  tdxAPI,
  GeneralParameter,
  SearchByCityParameter,
  NearByParameter,
} from '..'
import { BikeAvailability } from '../types'

export const availabilityRequired = [
  'StationID',
  'ServiceStatus',
  'AvailableRentBikes',
  'AvailableReturnBikes',
]

export const fetchAvailabilityStationByCity = ({
  $format = 'JSON',
  $filter,
  city,
}: GeneralParameter & SearchByCityParameter) => {
  return tdxAPI.get<BikeAvailability>(`/basic/v2/Bike/Availability/City/${city}`, {
    params: {
      $format,
      $filter,
    },
  })
}

export const fetchAvailabilityStationNearBy = ({
  $format = 'JSON',
  $spatialFilter,
}: GeneralParameter & NearByParameter) => {
  return tdxAPI.get<BikeAvailability>(`/advanced/v2/Bike/Availability/NearBy`, {
    params: {
      $format,
      $spatialFilter,
    },
  })
}
