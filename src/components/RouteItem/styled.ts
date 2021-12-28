import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'
import { limitLineCss, LineLimit } from '../../styles/helper'

type IsActive = {
  active: boolean
}

export const RouteItemWrapper = styled.li<IsActive>`
  display: block;
  border-top: 1px solid ${props => props.theme.colors.grey[300]};
  cursor: pointer;
  padding: 10px 28px 10px 16px;
  background-color: ${props => props.active ? props.theme.colors.primary[500] : props.theme.colors.grey[100]};

  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary[500] : props.theme.colors.grey[200]};
  }

  ${breakpoint('md')`
    padding: 20px 40px 20px 28px;
  `}
`

export const RouteItemTitle = styled.h1<IsActive & LineLimit>`
  ${limitLineCss}
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  color: ${props => props.active ? props.theme.colors.grey[100] : props.theme.colors.primary[500]};
`

export const RouteItemCyclingContent = styled.div`
  position: relative;
  margin: 12px 0;
`

const RouteItemCyclingText = styled.span<IsActive>`
  padding: 8px 12px;
  font-size: 15px;
  background-color: ${props => props.active ? props.theme.colors.grey[100] : props.theme.colors.primary[100]};
  color: ${props => props.theme.colors.primary[500]};
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
`

export const RouteItemCyclingRoadSection = styled(RouteItemCyclingText)`
  flex: 1 1 auto;
`

export const RouteItemCyclingTitle = styled(RouteItemCyclingText)`
  flex: 0 0 auto;
  margin-right: 8px;
  margin-left: 20px;
`

export const RouteItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(n+2) {
    margin-top: 12px;
  }
`

export const RouteItemInfo = styled.span<IsActive>`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 6px;
  color: ${props => props.active ? props.theme.colors.grey[200] : props.theme.colors.grey[500]};

  & i {
    margin-right: 6px;
  }
`

export const RouteItemDirection = styled.span<IsActive>`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 60px;
  transform: scaleX(0.5);
  transform-origin: 0% 50%;
  color: ${props => props.active ? props.theme.colors.grey[100] : props.theme.colors.grey[500]};
`
