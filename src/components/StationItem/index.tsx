import { Station } from '../../store/station'
import * as Styled from './styled'
import { getStationStatusType } from '../../utils'
import { ServiceStatus } from '../../constants'
import { DisplayTypes } from '../../constants'

export type BadgeClick = (type: DisplayTypes, targetData: Station) => void

const StationItem = ({
  station,
  badgeClick,
}: {
  station: Station
  badgeClick: BadgeClick
}) => {
  return (
    <Styled.StationItemWrapper>
      <Styled.StationItemTitle lineLimit={1}>
        {station.StationName.Zh_tw.split('_')[1]}
      </Styled.StationItemTitle>
      <Styled.StationItemContentWrapper>
        <Styled.StationItemBadge
          data-type="rent"
          status={getStationStatusType(
            station.ServiceStatus,
            station.AvailableRentBikes
          )}
          onClick={() => badgeClick(DisplayTypes.Bike, station)}
        >
          <Styled.BadgeTitle>
            <i className="fas fa-bicycle"></i>
            可租借
          </Styled.BadgeTitle>
          <Styled.BadgeInfo>{station.AvailableRentBikes}</Styled.BadgeInfo>
        </Styled.StationItemBadge>
        <Styled.StationItemBadge
          data-type="return"
          status={getStationStatusType(
            station.ServiceStatus,
            station.AvailableReturnBikes
          )}
          onClick={() => badgeClick(DisplayTypes.Parking, station)}
        >
          <Styled.BadgeTitle>
            <i className="fas fa-parking"></i>
            可停車
          </Styled.BadgeTitle>
          <Styled.BadgeInfo>{station.AvailableReturnBikes}</Styled.BadgeInfo>
        </Styled.StationItemBadge>
      </Styled.StationItemContentWrapper>
      <Styled.StationItemContentWrapper>
        <Styled.StationItemBorderTip>
          {station.StationName.Zh_tw.split('_')[0]}
        </Styled.StationItemBorderTip>
        <Styled.StationItemTip>
          <i className="fas fa-lightbulb"></i>
          {ServiceStatus[station.ServiceStatus]}
        </Styled.StationItemTip>
      </Styled.StationItemContentWrapper>
    </Styled.StationItemWrapper>
  )
}

export default StationItem
