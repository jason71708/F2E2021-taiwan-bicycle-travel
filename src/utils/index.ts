// Force to have `Name` fields
// export const getPathWithQueryString = (path: string, { limit = 600, keywords, city }: TDXAPIParameters) => {
//   const filter = `Name ne null${keywords ? ` and (contains(Name, '${keywords}') or contains(Description, '${keywords}'))` : ''}`
//   const top = `&$top=${limit}`
//   return `${path}${city ? '/' + city : ''}?$filter=${filter}${top}&$format=JSON`
// }

export default {}