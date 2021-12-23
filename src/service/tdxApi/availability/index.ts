import { tdxAPI, getAuthorizationHeader, GeneralParameter, SearchByCityParameter, NearByParameter } from '..'
import { BikeAvailability } from '../types'

export const availabilityRequired = ['StationID', 'ServiceStatus', 'AvailableRentBikes', 'AvailableReturnBikes']

export const fetchAvailabilityStationByCity = (
  {
    $format = 'JSON',
    $filter,
    city
  }: GeneralParameter & SearchByCityParameter
) => {
  return tdxAPI.get<BikeAvailability>(
    `/v2/Bike/Availability/${city}`,
    {
      headers: getAuthorizationHeader(),
      params: {
        $format,
        $filter
      }
    }
  )
}

export const fetchAvailabilityStationNearBy = (
  {
    $format = 'JSON',
    $spatialFilter
  }: GeneralParameter & NearByParameter
) => {
  return tdxAPI.get<BikeAvailability>(
    `/v2/Bike/Availability/NearBy`,
    {
      headers: getAuthorizationHeader(),
      params: {
        $format,
        $spatialFilter
      }
    }
  )
}