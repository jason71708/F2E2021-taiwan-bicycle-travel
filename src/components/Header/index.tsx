import * as Styled from './styled'
import NavBar from '../Navbar'
import useBreakpoint from '../../hooks/useBreakpoint'
import { useEffect, useState } from 'react'
import TransitionContainer from '../../containers/TransitionContainer'

const Header = () => {
  const isMdBp = useBreakpoint('md')
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const closeSearchList = () => {
      setShowMenu(false)
    }
    document.addEventListener('click', closeSearchList)
    return () => {
      document.removeEventListener('click', closeSearchList)
    }
  }, [setShowMenu])

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
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
    </div>
  )
}

export default Header
