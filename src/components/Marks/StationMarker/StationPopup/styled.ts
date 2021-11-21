import styled from 'styled-components'
import { stationStatusCss } from '../../../../styles/helper'
import breakpoint from '../../../../styles/breakpoint'

export const StationPopupTitle = styled.h1`
  font-weight: 700;
  font-size: 15px;
  line-height: 1.3;
  color: ${props => props.theme.colors.primary[500]};

  ${breakpoint('md')`
    font-size: 18px;
    line-height: 1.5;
  `}
`

export const StationPopupInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(n+2) {
    margin-top: 8px;
  }
`

export const StationPopupStatus = styled.span`
  color: ${props => props.theme.colors.grey[500]};
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;

  & i {
    margin-right: 6px;
  }
`

export const StationPopupBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StationPopupBadge = styled.span`
  ${stationStatusCss}
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: auto;
  padding: 1px 6px;
  border-radius: 4px;

  & i {
    margin-right: 8px;
  }

  &:nth-child(n+2) {
    margin-left: 12px;
  }

  ${breakpoint('md')`
    width: 70px;
    height: 30px;
    padding: 0 12px;
  `}
`