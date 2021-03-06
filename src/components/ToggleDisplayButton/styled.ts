import styled from 'styled-components'
import { shawdowCss } from '../../styles/helper'
import breakpoint from '../../styles/breakpoint'

export const ToggleDisplayButtonWrapper = styled.div`
  position: absolute;
  padding: 4px 6px;
  top: 20px;
  right: calc(50% - 100px);
  width: 200px;
  height: 36px;
  cursor: pointer;
  z-index: 402; // In order to biger than Map's z-index
  ${shawdowCss}
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.grey[100]};
  border-radius: 999px;

  ${breakpoint('md')`
    width: 280px;
    height: 60px;
    padding: 8px 12px;
    top: calc(36px + 60px + 12px);
    right: calc(50% - 140px);
  `}
`

export const DisplayButton = styled.button<{ active?: boolean }>`
  flex: 1 0 auto;
  width: 50%;
  height: 100%;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.active ? props.theme.colors.grey[100] : props.theme.colors.primary[400]};
  background-color: ${props => props.active ? props.theme.colors.primary[400] : props.theme.colors.grey[100]};
  font-size: 14px;

  & i {
    margin-right: 8px;
  }

  ${breakpoint('md')`
    font-size: 18px;
  `}
`