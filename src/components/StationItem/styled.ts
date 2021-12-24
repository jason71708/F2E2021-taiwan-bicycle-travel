import styled from 'styled-components'
import breakpoint, { breakpoints } from '../../styles/breakpoint'
import { limitLineCss, stationStatusCss } from '../../styles/helper'

export const StationItemWrapper = styled.li`
  display: block;
  padding-bottom: 10px;
  border-top: 1px solid ${props => props.theme.colors.grey[300]};
  padding-top: 10px;

  @media screen and (min-width: ${breakpoints.md}px) {
    padding-top: 20px;
  }

  ${breakpoint('md')`
    padding-bottom: 20px;
  `}
`

export const StationItemTitle = styled.h1`
  ${limitLineCss}
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary[500]};
`

export const StationItemContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`

export const StationItemBadge = styled.button`
  ${stationStatusCss}
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 4px 20px;
  border-radius: 8px;

  &:nth-child(n+2) {
    margin-left: 20px;
  }

  ${breakpoint('md')`
    display: block;
    padding: 8px 0;
  `}
`

export const BadgeTitle = styled.span`
  display: inline-block;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;

  & i {
    margin-right: 4px;
  }

  ${breakpoint('md')`
    display: block;
  `}
`

export const BadgeInfo = styled.span`
  display: inline-block;
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;

  ${breakpoint('md')`
    display: block;
    font-size: 26px;
    margin-top: 4px;
  `}
`

export const StationItemTip = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 6px;
  color: ${props => props.theme.colors.grey[500]};

  & i {
    margin-right: 6px;
  }
`

export const StationItemBorderTip = styled(StationItemTip)`
  padding: 6px 12px;
  border: 1px solid ${props => props.theme.colors.grey[500]};
`;
