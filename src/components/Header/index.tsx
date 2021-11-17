import { HeaderWrapper, HeaderContent, LogoWrapper, MenuWrapper } from './styled'
import NavBar from '../Navbar'
import useBreakpoint from '../../hooks/useBreakpoint'
import { useState } from 'react'

const Header = () => {
  const isMdBp = useBreakpoint('md')
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <LogoWrapper src="/logo.png" alt="logo" />
          {isMdBp ? (
            <NavBar />
          ) : (
            <MenuWrapper onClick={() => setShowMenu(!showMenu)}>
              <i className="fas fa-bars"></i>
            </MenuWrapper>
          )}
        </HeaderContent>
        {showMenu && !isMdBp && <NavBar />}
      </HeaderWrapper>
    </>
  )
}

export default Header