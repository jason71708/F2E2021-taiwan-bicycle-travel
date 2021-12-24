import * as Styled from './styled'
import { Link, useLocation } from 'react-router-dom'
import { Routes } from '../../constants/routes'

const NavBar = () => {
  const location = useLocation()

  return (
    <Styled.NavBarWrapper>
      <Link to={Routes.Bicycle}>
        <Styled.LinkContent match={location.pathname === Routes.Bicycle}>
          <i className="fas fa-bicycle"></i>
          找單車
        </Styled.LinkContent>
      </Link>
      <Link to={Routes.Routes}>
        <Styled.LinkContent match={location.pathname === Routes.Routes}>
          <i className="fas fa-route"></i>
          找路線
        </Styled.LinkContent>
      </Link>
      {/* <Link to={Routes.Scenics}>
        <LinkContent match={location.pathname === Routes.Scenics}>
          <i className="fas fa-umbrella-beach"></i>
          找景點
        </LinkContent>
      </Link> */}
    </Styled.NavBarWrapper>
  )
}

export default NavBar
