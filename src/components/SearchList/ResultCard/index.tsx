import { Station } from '../../../store/station'
import { ResultCardWrapper, ResultCardTitle, ResultCardContentWrapper, ResultCardBadge, BadgeTitle, BadgeInfo, ResultCardTip, ResultCardBorderTip } from './styled'
import { getStationStatusType } from '../../../utils/status'
import { ServiceStatus } from '../../../constants'
import { DisplayTypes } from '../../../constants'

export type BadgeClick = (type: DisplayTypes, targetData: Station) => void

const ResultCard = (
  { station, badgeClick }:
  { station: Station, badgeClick: BadgeClick
}) => {

  return (
    <ResultCardWrapper>
      <ResultCardTitle lineLimit={1}>
        {station.StationName.Zh_tw.split('_')[1]}
      </ResultCardTitle>
      <ResultCardContentWrapper>
        <ResultCardBadge
          data-type="rent"
          status={getStationStatusType(station.ServiceStatus, station.AvailableRentBikes)}
          onClick={() => badgeClick(DisplayTypes.Bike, station)}
        >
          <BadgeTitle>
            <i className="fas fa-bicycle"></i>
            可租借
          </BadgeTitle>
          <BadgeInfo>
            {station.AvailableRentBikes}
          </BadgeInfo>
        </ResultCardBadge>
        <ResultCardBadge
          data-type="return"
          status={getStationStatusType(station.ServiceStatus, station.AvailableReturnBikes)}
          onClick={() => badgeClick(DisplayTypes.Parking, station)}
        >
          <BadgeTitle>
            <i className="fas fa-parking"></i>
            可停車
          </BadgeTitle>
          <BadgeInfo>
            {station.AvailableReturnBikes}
          </BadgeInfo>
        </ResultCardBadge>
      </ResultCardContentWrapper>
      <ResultCardContentWrapper>
        <ResultCardBorderTip>
          {station.StationName.Zh_tw.split('_')[0]}
        </ResultCardBorderTip>
        <ResultCardTip>
          <i className="fas fa-lightbulb"></i>
          {ServiceStatus[station.ServiceStatus]}
        </ResultCardTip>
      </ResultCardContentWrapper>
    </ResultCardWrapper>
  )
}

export default ResultCard
