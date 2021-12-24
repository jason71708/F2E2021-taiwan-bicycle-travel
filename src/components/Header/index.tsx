import * as styled from './styled'
import NavBar from '../Navbar'
import useBreakpoint from '../../hooks/useBreakpoint'
import { useState } from 'react'

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
        {showMenu && !isMdBp && <NavBar />}
      </styled.HeaderWrapper>
    </>
  )
}

export default Header
