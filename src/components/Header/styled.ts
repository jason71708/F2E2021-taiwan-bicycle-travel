import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const HeaderWrapper = styled.section`
  position: relative;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary[400]};
  text-align: center;
`

export const HeaderContent = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: ${props => props.theme.layout.headerHeight.default};
  padding: 10px 20px;

  ${breakpoint('md')`
    padding: 20px 72px;
    height: ${props => props.theme.layout.headerHeight.md};
  `}
`

export const LogoWrapper = styled.img`
  width: 105px;

  ${breakpoint('md')`
    width: 210px;
  `}
`

export const MenuWrapper = styled.button`
  color: ${props => props.theme.colors.grey[100]};
  cursor: pointer;
`