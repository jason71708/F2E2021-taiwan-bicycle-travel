import axios from 'axios'
import jsSHA from 'jssha'

/**************************************************/
/******** For TDX api authorization header ********/
/**************************************************/

export const getAuthorizationHeader = () => {
  const UTCTime = new Date().toUTCString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(process.env.REACT_APP_TDX_APP_KEY || '', 'TEXT')
  ShaObj.update('x-date: ' + UTCTime)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = `
    hmac username="${process.env.REACT_APP_TDX_APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"
  `
  return {
    Authorization,
    'X-Date': UTCTime
  }
}

/***********************************************/
/******** https://tdx.transportdata.tw/ ********/
/***********************************************/

export const tdxAPI = axios.create({
  baseURL: process.env.REACT_APP_TDX_API_URL
})

/***************************************/
/******** For TDX api parameter ********/
/***************************************/

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
}

/*********************************************/
/******** Format special query string ********/
/*********************************************/

type TransformKeysToFilter = (
  required?: string[],
  searchs?: {
    keyword: string,
    searchFields: string[]
  }[]
) => string

export const transformKeysToFilter: TransformKeysToFilter = (required = [], searchs = []) => {
  const requiredFilter = required.map(key => key + ' ne null').join(' and ')
  const searchFilter = searchs.map(search => `(${search.searchFields.map(field => `contains(${field}, '${search.keyword}')`).join(' or ')})`).join(' and ')
  return [requiredFilter, searchFilter].filter(filter => filter).join(' and ')
}

type TransfromPositionToSpatialFilter = (
  position: [number, number], // [Lat, Lon]
  range?: number
) => string

export const transfromPositionToSpatialFilter: TransfromPositionToSpatialFilter = (position, range = 1000) =>
  `nearby(${position[0]},${position[1]},${range})`

/***********************/
/******** Unuse ********/
/***********************/

// export const fetchRequest = <T>(url: string): Promise<T> => {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       return response.json().then(data => data as T);
//     })          
// }
