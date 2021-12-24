import React from 'react'
import { BikeShape } from '../../service/tdxApi/types'
import * as Styled from './styled'
import { formatLength } from '../../utils'

const RouteItem = React.memo(({ route }: { route: BikeShape }) => {
  return (
    <Styled.RouteItemWrapper>
      <Styled.RouteItemTitle lineLimit={1}>
        {route.RouteName}
      </Styled.RouteItemTitle>
      <Styled.RouteItemCyclingContent>
        <Styled.RouteItemRow>
          <Styled.RouteItemCyclingTitle>起</Styled.RouteItemCyclingTitle>
          <Styled.RouteItemCyclingRoadSection>
            {route.RoadSectionStart}
          </Styled.RouteItemCyclingRoadSection>
        </Styled.RouteItemRow>
        <Styled.RouteItemRow>
          <Styled.RouteItemCyclingTitle>迄</Styled.RouteItemCyclingTitle>
          <Styled.RouteItemCyclingRoadSection>
            {route.RoadSectionEnd}
          </Styled.RouteItemCyclingRoadSection>
        </Styled.RouteItemRow>
        <Styled.RouteItemDirection>
          {route.Direction === '雙向' ? (
            <i className="fas fa-arrows-alt-v"></i>
          ) : (
            <i className="fas fa-long-arrow-alt-down"></i>
          )}
        </Styled.RouteItemDirection>
      </Styled.RouteItemCyclingContent>
      <Styled.RouteItemRow>
        <Styled.RouteItemInfo>
          <i className="fas fa-map-marker-alt"></i>
          {route.City}
        </Styled.RouteItemInfo>
        <Styled.RouteItemInfo>
          <i className="fas fa-route"></i>
          總長 {formatLength(route.CyclingLength)}
        </Styled.RouteItemInfo>
      </Styled.RouteItemRow>
    </Styled.RouteItemWrapper>
  )
})

export default RouteItem
