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
`

export const SearchResultListWrapper = styled.ul`
  width: 100%;
  height: calc(100% - 36px - 28px);
  overflow: auto;
  padding-right: 12px;
`