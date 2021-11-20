import { useState } from 'react'
import { SearchListWrapper } from './styled'
import availableCities from '../../constants/availableCities'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { stationRequestAction } from '../../store/station'

const SearchList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pedding, data, error } = useSelector(
    (state: RootState) => state.station
  )
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState(availableCities[0].City)

  const submitSearch = (keyword: string, city: string) => {
    dispatch(stationRequestAction({ keyword, city }))
  }

  return (
    <SearchListWrapper>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} onKeyPress={e => {
        if (e.key === 'Enter') {
          submitSearch(keyword, city)
        }
      }}/>
      <select onChange={e => setCity(e.target.value)}>
        {availableCities.map(city => (
          <option key={city.City} value={city.City}>{city.CityName}</option>
        ))}
      </select>
      {pedding && (
        <h1>Loading</h1>
      )}
      {error && (
        <h1>伺服器錯誤</h1>
      )}
      {!pedding && !error && (data.length > 0 ? (
        data.map(d => (
          <div key={d.StationID}>
            <h1>{d.StationName.Zh_tw.split('_')[1]}</h1>
            <p>{d.AvailableRentBikes}</p>
            <p>{d.AvailableReturnBikes}</p>
            <p>{d.ServiceStatus}</p>
            <p>{d.StationPosition.PositionLat}, {d.StationPosition.PositionLon}</p>
          </div>
        ))) : (
         <div>無搜尋結果</div>
      ))}
    </SearchListWrapper>
  )
}

export default SearchList