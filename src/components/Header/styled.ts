import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const HeaderWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: ${props => props.theme.layout.headerHeight.default};
  text-align: center;

  ${breakpoint('md')`
    height: ${props => props.theme.layout.headerHeight.md};
  `}
`

export const HeaderContent = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.colors.primary[400]};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.layout.headerHeight.default};
  padding: 10px 20px;
  z-index: 404;

  ${breakpoint('md')`
    position: static;
    padding: 20px 72px;
    height: ${props => props.theme.layout.headerHeight.md};
  `}
`

export const LogoWrapper = styled.img`
  width: 105px;

  ${breakpoint('md')`
    width: 180px;
  `}
`

export const MenuWrapper = styled.button`
  color: ${props => props.theme.colors.grey[100]};
  cursor: pointer;
`