import React from 'react'
import { BikeShapeSorted } from '../../service/tdxApi/types'
import * as Styled from './styled'
import { formatLength } from '../../utils'

export type ItemOnClick = (route: BikeShapeSorted) => void

const RouteItem = React.memo(
  ({
    route,
    itemOnClick,
    isActive,
  }: {
    route: BikeShapeSorted
    itemOnClick: ItemOnClick
    isActive: boolean
  }) => {
    return (
      <Styled.RouteItemWrapper
        onClick={() => itemOnClick(route)}
        active={isActive}
      >
        <Styled.RouteItemTitle lineLimit={1} active={isActive}>
          {route.RouteName}
        </Styled.RouteItemTitle>
        <Styled.RouteItemCyclingContent>
          <Styled.RouteItemRow>
            <Styled.RouteItemCyclingTitle active={isActive}>
              起
            </Styled.RouteItemCyclingTitle>
            <Styled.RouteItemCyclingRoadSection active={isActive}>
              {route.RoadSectionStart}
            </Styled.RouteItemCyclingRoadSection>
          </Styled.RouteItemRow>
          <Styled.RouteItemRow>
            <Styled.RouteItemCyclingTitle active={isActive}>
              迄
            </Styled.RouteItemCyclingTitle>
            <Styled.RouteItemCyclingRoadSection active={isActive}>
              {route.RoadSectionEnd}
            </Styled.RouteItemCyclingRoadSection>
          </Styled.RouteItemRow>
          <Styled.RouteItemDirection active={isActive}>
            {route.Direction === '雙向' ? (
              <i className="fas fa-arrows-alt-v"></i>
            ) : (
              <i className="fas fa-long-arrow-alt-down"></i>
            )}
          </Styled.RouteItemDirection>
        </Styled.RouteItemCyclingContent>
        <Styled.RouteItemRow>
          <Styled.RouteItemInfo active={isActive}>
            <i className="fas fa-map-marker-alt"></i>
            {route.City}
          </Styled.RouteItemInfo>
          <Styled.RouteItemInfo active={isActive}>
            <i className="fas fa-route"></i>
            總長 {formatLength(route.CyclingLength)}
          </Styled.RouteItemInfo>
        </Styled.RouteItemRow>
      </Styled.RouteItemWrapper>
    )
  }
)

export default RouteItem
