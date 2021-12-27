import { css, keyframes } from 'styled-components'
import { StationStatus } from '../constants'

export const shawdowCss = css`
  box-shadow: 4px 4px 20px 0 ${props => props.theme.colors.grey[500]}30;
`

export const limitLineCss = css<{ lineLimit: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.lineLimit};
  -webkit-box-orient: vertical;
`

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

export const rotateAnimation = css`
  animation: ${rotate} 2s linear infinite;
`

export const stationStatusCss = css<{ status: StationStatus }>`
  color: ${props => props.status === StationStatus.Default ? props.theme.colors.primary[500]
    : props.status === StationStatus.Limited ? props.theme.colors.alert[600]
      : props.theme.colors.grey[400]
  };
  background-color: ${props => props.status === StationStatus.Default ? props.theme.colors.primary[100]
    : props.status === StationStatus.Limited ? props.theme.colors.alert[100]
      : props.theme.colors.grey[200]
  };
`
