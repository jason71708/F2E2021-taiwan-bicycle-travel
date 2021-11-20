import styled from 'styled-components'
import breakpoint from '../../styles/breakpoint'

export const NavBarWrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary[100]};
  padding: 8px 0;
  color: ${props => props.theme.colors.primary[400]};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 401;

  ${breakpoint('md')`
    position: static;
    width: auto;
    background-color: transparent;
  `}

  & a {
    text-decoration: none;
    flex: 1 0 auto;

    &:nth-child(1n+2) {
      border-left: 1px solid ${props => props.theme.colors.primary[400]};

      ${breakpoint('md')`
        border-left: none;
      `}
    }
  }

`

export const LinkContent = styled.span`
  text-align: center;
  padding: 4px 0;
  font-weight: 700;
  font-size: 12px;
  transition: background-color 0.2s linear;

  ${breakpoint('md')<{ match: boolean }>`
    display: inline-block;
    background-color: ${props => props.match ? props.theme.colors.primary[100] : props.theme.colors.grey[100]};
    border-radius: 8px;
    box-shadow: 0 0 0 ${props => props.match ? '3' : '1'}px ${props => props.theme.colors.primary[300]};
    padding: 8px 16px;
    margin-left: 16px;
    font-size: 16px;

    &:hover {
      box-shadow: 0 0 0 3px ${props => props.theme.colors.primary[300]};
    }
  `}

  & i {
    display: block;

    ${breakpoint('md')`
      display: inline-block;
      margin-right: 4px;
    `}
  }
`