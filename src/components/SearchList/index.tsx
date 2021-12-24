import React, { useState } from 'react'
import * as Styled from './styled'
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
  placeholderText?: string
  submitHandler: (keyword: string, city: string) => void
}) => {
  const [keyword, setKeyword] = useState('')
  const [city, setCity] = useState(availableCities[0].City)

  return (
    <Styled.SearchListWrapper isUnfold={openSearchList}>
      <Styled.SearchListUnfoldButton
        onClick={() => toggleSearchList(!openSearchList)}
      >
        {openSearchList ? (
          <i className="fas fa-angle-down"></i>
        ) : (
          <i className="fas fa-angle-up"></i>
        )}
      </Styled.SearchListUnfoldButton>
      <Styled.SearchBar>
        <Styled.SearchSelect onChange={(e) => setCity(e.target.value)}>
          {availableCities.map((city) => (
            <option key={city.City} value={city.City}>
              {city.CityName}
            </option>
          ))}
        </Styled.SearchSelect>
        <Styled.SearchInputWrapper>
          <Styled.SearchInput
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
          <Styled.SearchButton onClick={() => submitHandler(keyword, city)}>
            <i className="fas fa-search"></i>
          </Styled.SearchButton>
        </Styled.SearchInputWrapper>
      </Styled.SearchBar>
      <Styled.SearchResultListWrapper>
        {children}
      </Styled.SearchResultListWrapper>
    </Styled.SearchListWrapper>
  )
}

export default SearchList
