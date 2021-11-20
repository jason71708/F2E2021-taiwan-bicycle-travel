import styled from 'styled-components'
import { shawdowCss, rotateAnimation } from '../../styles/helper'
import breakpoint from '../../styles/breakpoint'

export const PositionButtonWrapper = styled.button<{ active: boolean, locating: boolean }>`
  position: absolute;
  top: 36px;
  left: calc(50% - 20px);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${props => props.active ? props.theme.colors.primary[400] : props.theme.colors.grey[300]};
  color: ${props => props.theme.colors.grey[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 401; // In order to biger than Map's z-index
  font-size: 20px;
  ${shawdowCss}
  ${props => props.locating ? rotateAnimation : ''}

  &:hover {
    border: 3px solid ${props => props.theme.colors.primary[500]};
  }

  ${breakpoint('md')`
    left: calc(50% - 30px);
    font-size: 30px;
    width: 60px;
    height: 60px;
  `}
`