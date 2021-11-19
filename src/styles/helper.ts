import { css, keyframes } from 'styled-components'

export const shawdowCss = css`
  box-shadow: 4px 4px 20px 0 ${props => props.theme.colors.grey[500]}30;
`

export const LimitLineCss = css<{ lineLimit: number }>`
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
