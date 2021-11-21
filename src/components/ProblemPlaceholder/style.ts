import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const ProblemWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.grey[400]};
`

export const ProblemText = styled.p`
  font-size: 18px;
  margin: 0 0 0 8px;
  text-align: center;
  padding: 0 40px;

  ${breakpoint('md')`
    text-align: start;
    padding: 0;
  `}
`

export const IconWrapper = styled.div`
  font-size: 32px;
`