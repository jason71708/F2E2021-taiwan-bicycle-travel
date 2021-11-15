import axios from 'axios'
import jsSHA from 'jssha'

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

// https://tdx.transportdata.tw/
export const tdxAPI = axios.create({
  baseURL: process.env.REACT_APP_TDX_API_URL
})

export const fetchRequest = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json().then(data => data as T);
    })          
}
