import styled from 'styled-components'
import { shawdowCss } from '../../styles/helper'
import breakpoint from '../../styles/breakpoint'

export const SearchListWrapper = styled.section<{ isUnfold: boolean }>`
  position: absolute;
  bottom: ${props => props.isUnfold ? '0px' : '-200px'};
  left: 0;
  width: 100vw;
  height: 300px;
  padding: 16px;
  z-index: 402; // In order to biger than Map's z-index
  background-color: ${props => props.theme.colors.grey[100]};
  border-radius: 8px;
  cursor: initial;
  /* overflow: hidden; */
  ${shawdowCss}
  transition: bottom 0.3s linear;

  ${breakpoint('md')`
    top: 36px;
    left: 36px;
    width: 430px;
    height: calc(100% - 72px);
    padding: 28px;
  `}
`

export const SearchListUnfoldButton = styled.button`
  position: absolute;
  bottom: 100%;
  background-color: ${props => props.theme.colors.grey[100]};
  width: 60px;
  height: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px 6px 0 0;
  z-index: 402;
  font-size: 14px;

  ${breakpoint('md')`
    display: none;
  `}
`

export const SearchBar = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  ${breakpoint('md')`
    margin-bottom: 28px;
  `}
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