import styled from 'styled-components'
import breakpoint, { breakpoints } from '../../styles/breakpoint'
import { limitLineCss } from '../../styles/helper'

export const RouteItemWrapper = styled.li`
  display: block;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.grey[300]};
  cursor: pointer;

  &:nth-child(n+2) {
    padding-top: 10px;

    @media screen and (min-width: ${breakpoints.md}px) {
      padding-top: 20px;
    }
  }

  ${breakpoint('md')`
    padding-bottom: 20px;
  `}
`

export const RouteItemTitle = styled.h1`
  ${limitLineCss}
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary[500]};
`

export const RouteItemCyclingContent = styled.div`
  width: 100%;
  height: 100px;
  margin: 12px 0;
  border: 1px solid #000;
`

export const RouteItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RouteItemInfo = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 6px;
  color: ${props => props.theme.colors.grey[500]};

  & i {
    margin-right: 6px;
  }
`
