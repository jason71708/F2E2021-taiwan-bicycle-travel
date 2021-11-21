import styled from 'styled-components'
import { shawdowCss } from '../../styles/helper'

export const SearchListWrapper = styled.section`
  position: absolute;
  top: 36px;
  left: 36px;
  z-index: 401; // In order to biger than Map's z-index
  width: 430px;
  height: calc(100% - 72px);
  background-color: ${props => props.theme.colors.grey[100]};
  padding: 28px;
  border-radius: 8px;
  cursor: initial;
  overflow: hidden;
  ${shawdowCss}
`

export const SearchBar = styled.div`
  margin-bottom: 28px;
  display: flex;
  align-items: center;
`

export const SearchResultListWrapper = styled.ul`
  width: 100%;
  height: calc(100% - 36px - 28px);
  overflow: auto;
  padding-right: 12px;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  padding: 8px 48px 8px 20px;
  margin-left: 12px;
  flex: 1 0 auto;
  background-color: ${props => props.theme.colors.grey[200]};
  color: ${props => props.theme.colors.grey[600]};
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
`

export const SearchButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: ${props => props.theme.colors.grey[600]};
`

export const SearchSelect = styled.select`
  width: 100px;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.colors.primary[600]};
  border: 2px solid ${props => props.theme.colors.primary[400]};
  border-radius: 8px;
`