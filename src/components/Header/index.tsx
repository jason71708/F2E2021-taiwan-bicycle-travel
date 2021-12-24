import * as styled from './styled'
import NavBar from '../Navbar'
import useBreakpoint from '../../hooks/useBreakpoint'
import { useState } from 'react'
import TransitionContainer from '../../containers/TransitionContainer'

const Header = () => {
  const isMdBp = useBreakpoint('md')
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <styled.HeaderWrapper>
        <styled.HeaderContent>
          <styled.LogoWrapper src="./logo.png" alt="logo" />
          {isMdBp ? (
            <NavBar />
          ) : (
            <styled.MenuWrapper onClick={() => setShowMenu(!showMenu)}>
              <i className="fas fa-bars"></i>
            </styled.MenuWrapper>
          )}
        </styled.HeaderContent>
        <TransitionContainer show={showMenu}>
          <NavBar />
        </TransitionContainer>
      </styled.HeaderWrapper>
    </>
  )
}

export default Header
