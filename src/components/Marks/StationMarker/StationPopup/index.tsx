import { Popup } from 'react-leaflet'
import { Station } from '../../../../store/station'
import { StationPopupTitle, StationPopupInfo, StationPopupStatus, StationPopupBadgeWrapper, StationPopupBadge } from './styled'
import { ServiceStatus } from '../../../../constants'
import { getStationStatusType } from '../../../../utils/status'
import useBreakpoint from '../../../../hooks/useBreakpoint'

const StationPopup = ({ station }: { station: Station }) => {
  const isMdBp = useBreakpoint('md')

  return (
    <Popup closeButton={false} minWidth={isMdBp ? 350 : 270} maxHeight={isMdBp ? 100 : 75}>
      <StationPopupInfo>
        <StationPopupTitle>{station.StationName.Zh_tw.split('_')[1]}</StationPopupTitle>
        <StationPopupStatus>{station.StationName.Zh_tw.split('_')[0]}</StationPopupStatus>
      </StationPopupInfo>
      <StationPopupInfo>
        <StationPopupBadgeWrapper>
          <StationPopupBadge
            status={getStationStatusType(station.ServiceStatus, station.AvailableRentBikes)}
          >
            <i className="fas fa-bicycle"></i>
            {station.AvailableRentBikes}
          </StationPopupBadge>
          <StationPopupBadge
            status={getStationStatusType(station.ServiceStatus, station.AvailableReturnBikes)}
          >
            <i className="fas fa-parking"></i>
            {station.AvailableReturnBikes}
          </StationPopupBadge>
        </StationPopupBadgeWrapper>
        <StationPopupStatus>
          <i className="fas fa-lightbulb"></i>
          {ServiceStatus[station.ServiceStatus]}
        </StationPopupStatus>
      </StationPopupInfo>
    </Popup>
  )
}

export default StationPopup