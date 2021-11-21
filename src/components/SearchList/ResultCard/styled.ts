import styled from 'styled-components'
import { limitLineCss, stationStatusCss } from '../../../styles/helper'

export const ResultCardWrapper = styled.li`
  display: block;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.grey[300]};

  &:nth-child(n+2) {
    padding-top: 20px;
  }
`

export const ResultCardTitle = styled.h1`
  ${limitLineCss}
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary[500]};
`

export const ResultCardContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`

export const ResultCardBadge = styled.button`
  ${stationStatusCss}
  flex: 1 0 auto;
  text-align: center;
  padding: 8px 0;
  border-radius: 8px;

  &:nth-child(n+2) {
    margin-left: 20px;
  }
`

export const BadgeTitle = styled.span`
  display: block;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;

  & i {
    margin-right: 4px;
  }
`

export const BadgeInfo = styled.span`
  display: block;
  font-size: 26px;
  margin-top: 4px;
  line-height: 32px;
  font-weight: 700;
`

export const ResultCardTip = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 6px;
  color: ${props => props.theme.colors.grey[500]};

  & i {
    margin-right: 6px;
  }
`

export const ResultCardBorderTip = styled(ResultCardTip)`
  padding: 6px 12px;
  border: 1px solid ${props => props.theme.colors.grey[500]};
`;
