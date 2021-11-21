import { useState } from 'react'
import { useMap } from 'react-leaflet'
import { SearchListWrapper, SearchBar, SearchResultListWrapper } from './styled'
import availableCities from '../../constants/availableCities'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { stationRequestAction } from '../../store/station'
import { displayTypeUpdateAction } from '../../store/displayType'
import ResultCard, { BadgeClick } from './ResultCard'

const SearchList = () => {
  const map = useMap()
  const dispatch = useDispatch<AppDispatch>()
  const { type } = useSelector(
    (state: RootState) => state.displayType
  )
  const { pedding, data, error } = useSelector(
    (state: RootState) => state.station
  )
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState(availableCities[0].City)

  const submitSearch = (keyword: string, city: string) => {
    dispatch(stationRequestAction({ keyword, city }))
  }

  const badgeClickHandler: BadgeClick = (targetType, targetData) => {
    if (type !== targetType) {
      dispatch(displayTypeUpdateAction({ type: targetType }))
    }
    map.flyTo([targetData.StationPosition.PositionLat, targetData.StationPosition.PositionLon], 18)
  }

  return (
    <SearchListWrapper>
      <SearchBar>
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
      </SearchBar>
      <SearchResultListWrapper>
        {pedding && (
          <h1>Loading</h1>
        )}
        {error && (
          <h1>伺服器錯誤</h1>
        )}
        {!pedding && !error && (data.length > 0 ? (
          data.map(station => (
            <ResultCard
              key={station.StationID}
              station={station}
              badgeClick={badgeClickHandler}
            />
          ))) : (
          <div>無搜尋結果</div>
        ))}
      </SearchResultListWrapper>
    </SearchListWrapper>
  )
}

export default SearchList