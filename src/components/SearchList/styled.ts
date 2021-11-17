import styled from 'styled-components'

export const SearchListWrapper = styled.section`
  position: absolute;
  top: 36px;
  left: 36px;
  z-index: 401; // In order to biger than Map's z-index
  width: 430px;
  height: calc(100% - 72px);
  background-color: ${props => props.theme.colors.grey[100]};
  padding: 28px;
  box-shadow: 4px 4px 20px 0 ${props => props.theme.colors.grey[500]}30;
  border-radius: 8px;
`