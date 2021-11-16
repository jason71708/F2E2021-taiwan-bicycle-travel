import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const HeaderWrapper = styled.nav`
  display: block;
  width: 100vw;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.primary[400]};

  ${breakpoint('md')`
    padding: 20px 72px;
  `}
`

export const LogoWrapper = styled.img`
  width: 210px;
`