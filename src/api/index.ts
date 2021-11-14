import axios from 'axios'

// https://tdx.transportdata.tw/
export const tdxAPI = axios.create({
  baseURL: process.env.REACT_APP_TDX_API_URL
})