import React, { useState } from 'react'
import { useMap } from 'react-leaflet'
import { SearchListWrapper, SearchListUnfoldButton, SearchBar, SearchResultListWrapper, SearchInputWrapper, SearchInput, SearchButton, SearchSelect } from './styled'
import availableCities from '../../constants/availableCities'
import { RootState, AppDispatch } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { stationRequestAction } from '../../store/station'
import { displayTypeUpdateAction } from '../../store/displayType'
import ResultCard, { BadgeClick } from './ResultCard'
import ProblemPlaceholder from '../ProblemPlaceholder'
import { Problems } from '../../constants'
import LoadingPlaceholder from '../LoadingPlaceholder'

const SearchList = (
  { openSearchList, unfoldButtonClick }:
  { openSearchList: boolean, unfoldButtonClick: React.Dispatch<React.SetStateAction<boolean>>
}) => {
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
    map.flyTo([targetData.StationPosition.PositionLat, targetData.StationPosition.PositionLon], undefined, { animate: false })
  }

  return (
    <SearchListWrapper isUnfold={openSearchList}>
      <SearchListUnfoldButton
        onClick={() => unfoldButtonClick(!openSearchList)}
      >
        {openSearchList ? (
          <i className="fas fa-angle-down"></i>
        ) : (
          <i className="fas fa-angle-up"></i>
        )}
      </SearchListUnfoldButton>
      <SearchBar>
        <SearchSelect onChange={e => setCity(e.target.value)}>
          {availableCities.map(city => (
            <option key={city.City} value={city.City}>{city.CityName}</option>
          ))}
        </SearchSelect>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            value={keyword}
            placeholder="搜尋站點"
            onChange={e => setKeyword(e.target.value)} 
            onKeyPress={e => {
              if (e.key === 'Enter') {
                submitSearch(keyword, city)
              }
            }}
          />
          <SearchButton onClick={() => submitSearch(keyword, city)}>
            <i className="fas fa-search"></i>
          </SearchButton>
        </SearchInputWrapper>
      </SearchBar>
      <SearchResultListWrapper>
        {pedding && <LoadingPlaceholder />}
        {error && <ProblemPlaceholder problem={Problems.Error} />}
        {!pedding && !error && (data.length > 0 ? (
          data.map(station => (
            <ResultCard
              key={station.StationID}
              station={station}
              badgeClick={badgeClickHandler}
            />
          ))) : (
          <ProblemPlaceholder problem={Problems.NoResult} />
        ))}
      </SearchResultListWrapper>
    </SearchListWrapper>
  )
}

export default SearchList