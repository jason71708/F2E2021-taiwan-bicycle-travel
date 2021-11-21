import styled from 'styled-components'

export const SvgText = styled.text<{ color: string, isOverTen: boolean }>`
  fill: ${props => props.color};
  font-size:24px;
  font-weight: bold;
  transform: ${props => props.isOverTen ? 'translateX(-14px)' : 'translateX(-7px)'};
`