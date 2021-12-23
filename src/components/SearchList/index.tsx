import React, { useState } from 'react'
import {
  SearchListWrapper,
  SearchListUnfoldButton,
  SearchBar,
  SearchResultListWrapper,
  SearchInputWrapper,
  SearchInput,
  SearchButton,
  SearchSelect,
} from './styled'
import availableCities from '../../constants/availableCities'

const SearchList = ({
  openSearchList,
  toggleSearchList,
  children,
  placeholderText,
  submitHandler,
}: {
  openSearchList: boolean
  toggleSearchList: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  placeholderText: string
  submitHandler: (keyword: string, city: string) => void
}) => {
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState(availableCities[0].City)

  return (
    <SearchListWrapper isUnfold={openSearchList}>
      <SearchListUnfoldButton onClick={() => toggleSearchList(!openSearchList)}>
        {openSearchList ? (
          <i className="fas fa-angle-down"></i>
        ) : (
          <i className="fas fa-angle-up"></i>
        )}
      </SearchListUnfoldButton>
      <SearchBar>
        <SearchSelect onChange={(e) => setCity(e.target.value)}>
          {availableCities.map((city) => (
            <option key={city.City} value={city.City}>
              {city.CityName}
            </option>
          ))}
        </SearchSelect>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            value={keyword}
            placeholder={placeholderText || '搜尋'}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                submitHandler(keyword, city)
              }
            }}
          />
          <SearchButton onClick={() => submitHandler(keyword, city)}>
            <i className="fas fa-search"></i>
          </SearchButton>
        </SearchInputWrapper>
      </SearchBar>
      <SearchResultListWrapper>{children}</SearchResultListWrapper>
    </SearchListWrapper>
  )
}

export default SearchList
