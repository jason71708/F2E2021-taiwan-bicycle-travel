import { useCallback, useEffect, useRef, useState } from 'react'
import { SearchListWrapper } from './styled'
import { basicCities } from '../../constants/cities'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { stationRequestAction } from '../../store/station'
import L from 'leaflet'

const SearchList = () => {
  const domRef = useRef(null)
  const dispatch = useDispatch<AppDispatch>()
  const { pedding, data, error } = useSelector(
    (state: RootState) => state.station
  )
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState(basicCities[0].City)

  const submitSearch = (keyword: string, city: string) => {
    dispatch(stationRequestAction({ keyword, city }))
  }

  const disableEventPropagation = useCallback(() => {
    if (domRef.current) {
      L.DomEvent.disableClickPropagation(domRef.current);
      L.DomEvent.disableScrollPropagation(domRef.current)
    } else {
      setTimeout(() => {
        disableEventPropagation()
      }, 100)
    }
  }, [])

  useEffect(() => {
    disableEventPropagation()
  }, [disableEventPropagation])

  return (
    <SearchListWrapper ref={domRef}>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} onKeyPress={e => {
        if (e.key === 'Enter') {
          submitSearch(keyword, city)
        }
      }}/>
      <select onChange={e => setCity(e.target.value)}>
        {basicCities.map(city => (
          <option key={city.City} value={city.City}>{city.CityName}</option>
        ))}
      </select>
      {pedding && (
        <h1>Loading</h1>
      )}
      {error && (
        <h1>Error: {error}</h1>
      )}
      {data.map(d => (
        <div key={d.StationID}>
          <h1>{d.StationName.Zh_tw.split('_')[1]}</h1>
          <p>{d.AvailableRentBikes}</p>
          <p>{d.AvailableReturnBikes}</p>
          <p>{d.ServiceStatus}</p>
          <p>{d.StationPosition.PositionLat}, {d.StationPosition.PositionLon}</p>
        </div>
      ))}
    </SearchListWrapper>
  )
}

export default SearchList