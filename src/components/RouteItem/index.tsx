import { BikeShape } from '../../service/tdxApi/types'
import * as styled from './styled'
import { formatLength } from '../../utils'

const RouteItem = ({ route }: { route: BikeShape }) => {
  return (
    <styled.RouteItemWrapper>
      <styled.RouteItemTitle lineLimit={1}>
        {route.RouteName}
      </styled.RouteItemTitle>
      <styled.RouteItemCyclingContent></styled.RouteItemCyclingContent>
      <styled.RouteItemRow>
        <styled.RouteItemInfo>
          <i className="fas fa-map-marker-alt"></i>
          {route.City}
        </styled.RouteItemInfo>
        <styled.RouteItemInfo>
          <i className="fas fa-route"></i>
          總長 {formatLength(route.CyclingLength)}
        </styled.RouteItemInfo>
      </styled.RouteItemRow>
    </styled.RouteItemWrapper>
  )
}

export default RouteItem
