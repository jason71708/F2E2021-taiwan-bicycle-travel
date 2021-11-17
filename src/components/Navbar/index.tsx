import { NavBarWrapper, LinkContent } from './styled'
import { Link, useLocation } from 'react-router-dom'
import { Routes } from '../../types/routes'

const NavBar = () => {
  const location = useLocation()

  return (
    <NavBarWrapper>
      <Link to={Routes.Bicycle}>
        <LinkContent match={location.pathname === Routes.Bicycle}>
          <i className="fas fa-bicycle"></i>
          找單車
        </LinkContent>
      </Link>
      <Link to={Routes.Routes}>
        <LinkContent match={location.pathname === Routes.Routes}>
          <i className="fas fa-route"></i>
          找路線
        </LinkContent>
      </Link>
      <Link to={Routes.Scenics}>
        <LinkContent match={location.pathname === Routes.Scenics}>
          <i className="fas fa-umbrella-beach"></i>
          找景點
        </LinkContent>
      </Link>
    </NavBarWrapper>
  )
}

export default NavBar