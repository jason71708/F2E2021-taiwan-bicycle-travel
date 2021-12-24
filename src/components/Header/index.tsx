import * as Styled from './styled'
import NavBar from '../Navbar'
import useBreakpoint from '../../hooks/useBreakpoint'
import { useState } from 'react'
import TransitionContainer from '../../containers/TransitionContainer'

const Header = () => {
  const isMdBp = useBreakpoint('md')
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Styled.LogoWrapper src="./logo.png" alt="logo" />
          {isMdBp ? (
            <NavBar />
          ) : (
            <Styled.MenuWrapper onClick={() => setShowMenu(!showMenu)}>
              <i className="fas fa-bars"></i>
            </Styled.MenuWrapper>
          )}
        </Styled.HeaderContent>
        <TransitionContainer show={showMenu}>
          <NavBar />
        </TransitionContainer>
      </Styled.HeaderWrapper>
    </>
  )
}

export default Header
