import styled from 'styled-components'
import { stationStatusCss } from '../../../../styles/helper'

export const StationPopupTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary[500]};
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
  width: 70px;
  height: 30px;
  padding: 0 12px;
  border-radius: 4px;

  &:nth-child(n+2) {
    margin-left: 12px;
  }
`