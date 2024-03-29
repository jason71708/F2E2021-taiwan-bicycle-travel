import axios from 'axios'
import { BikeShape, BikeShapeSorted, Polyline } from './types'
import Wkt from 'wicket'

const wkt = new Wkt.Wkt()

export const tdxAPI = axios.create({
  baseURL: process.env.REACT_APP_TDX_API_URL,
})

export type GeneralParameter = {
  $format?: 'JSON' | 'XML'
}

export type FetchPageParameter = {
  $top?: number
  $skip?: number
}

export type SearchByCityParameter = {
  $filter: ReturnType<TransformKeysToFilter>
  city: string
}

export type NearByParameter = {
  $spatialFilter: ReturnType<TransfromPositionToSpatialFilter>
  $filter: ReturnType<TransformKeysToFilter>
}

type TransformKeysToFilter = (
  required?: string[],
  searchs?: {
    keyword: string
    searchFields: string[]
  }[]
) => string

export const transformKeysToFilter: TransformKeysToFilter = (
  required = [],
  searchs = []
) => {
  const requiredFilter = required.map((key) => key + ' ne null').join(' and ')
  const searchFilter = searchs
    .map(
      (search) =>
        `(${search.searchFields
          .map((field) => `contains(${field}, '${search.keyword}')`)
          .join(' or ')})`
    )
    .join(' and ')
  return [requiredFilter, searchFilter].filter((filter) => filter).join(' and ')
}

type TransfromPositionToSpatialFilter = (
  position: [number, number], // [Lat, Lon]
  range?: number
) => string

export const transfromPositionToSpatialFilter: TransfromPositionToSpatialFilter = (position, range = 1000) => `nearby(${position[0]},${position[1]},${range})`

export const formatBikeShape: (data: BikeShape) => BikeShapeSorted = (data) => {
  const geojson = wkt.read(data.Geometry).toJson()
  // API response data may have incorrect format
  const routes = (geojson.coordinates as Polyline[])
    .filter((coor) => {
      return coor[0] && Array.isArray(coor[0])
    })
    .map((coor) => coor.map((item) => item.reverse())) as Polyline[]
  return { ...data, Routes: routes }
}
