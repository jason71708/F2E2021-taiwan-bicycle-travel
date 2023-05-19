import axios from 'axios'
import { tdxAPI } from '../service/tdxApi'

const tdxAuthAPI = axios.create({
  baseURL: process.env.REACT_APP_TDX_AUTH_API_URL
})

export const fetchAuthToken = () => {
  return new Promise((resolve, reject) => {
    if (tdxAPI.defaults.headers.common['Authorization']) {
      resolve(tdxAPI.defaults.headers.common['Authorization'])
      return
    }
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', process.env.REACT_APP_TDX_APP_ID || '');
    data.append('client_secret', process.env.REACT_APP_TDX_APP_KEY || '');
    tdxAuthAPI.post<{ access_token: string }>('', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then(res => {
      tdxAPI.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
      resolve(res.data.access_token)
    }).catch(error => {
      reject(error)
    })
  })
}