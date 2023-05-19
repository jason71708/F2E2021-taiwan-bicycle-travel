import { BikeShape } from '../types'
import {
  tdxAPI,
  GeneralParameter,
  SearchByCityParameter,
} from '..'

export const required = [
  'Town',
  'RoadSectionStart',
  'RoadSectionEnd',
  'Direction',
  'CyclingLength',
]
export const searchFields = ['RoadSectionStart', 'RoadSectionEnd', 'RouteName']
export const searchTownFields = ['Town']

export const fetchBikeCyclingShapByCity = ({
  $format = 'JSON',
  $filter,
  city,
}: GeneralParameter & SearchByCityParameter) => {
  return tdxAPI.get<BikeShape[]>(`/basic/v2/Cycling/Shape/City/${city}`, {
    params: {
      $format,
      $filter,
    },
  })
}
