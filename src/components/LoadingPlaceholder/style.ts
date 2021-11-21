import styled from 'styled-components'
import { rotateAnimation } from '../../styles/helper'

export const LoadingWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary[400]};
`

export const ElementWrapper = styled.div`
  font-size: 32px;
  ${rotateAnimation}
`