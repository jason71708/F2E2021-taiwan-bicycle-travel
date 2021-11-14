import jsSHA from 'jssha'

export const getAuthorizationHeader = () => {
  const UTCTime = new Date().toUTCString()
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(process.env.REACT_APP_TDX_APP_KEY || '', 'TEXT')
  ShaObj.update('x-date: ' + UTCTime)
  let HMAC = ShaObj.getHMAC('B64')
  let Authorization = 'hmac username="' + process.env.REACT_APP_TDX_APP_ID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"'
  return {
    Authorization,
    'X-Date': UTCTime
  } 
}

// Force to have `Name` fields
// export const getPathWithQueryString = (path: string, { limit = 600, keywords, city }: TDXAPIParameters) => {
//   const filter = `Name ne null${keywords ? ` and (contains(Name, '${keywords}') or contains(Description, '${keywords}'))` : ''}`
//   const top = `&$top=${limit}`
//   return `${path}${city ? '/' + city : ''}?$filter=${filter}${top}&$format=JSON`
// }