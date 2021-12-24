import { Popup } from 'react-leaflet'
import { Station } from '../../../../store/station'
import * as Styled from './styled'
import { ServiceStatus } from '../../../../constants'
import { getStationStatusType } from '../../../../utils'
import useBreakpoint from '../../../../hooks/useBreakpoint'

const StationPopup = ({ station }: { station: Station }) => {
  const isMdBp = useBreakpoint('md')

  return (
    <Popup
      closeButton={false}
      minWidth={isMdBp ? 350 : 270}
      maxHeight={isMdBp ? 100 : 75}
    >
      <Styled.StationPopupInfo>
        <Styled.StationPopupTitle>
          {station.StationName.Zh_tw.split('_')[1]}
        </Styled.StationPopupTitle>
        <Styled.StationPopupStatus>
          {station.StationName.Zh_tw.split('_')[0]}
        </Styled.StationPopupStatus>
      </Styled.StationPopupInfo>
      <Styled.StationPopupInfo>
        <Styled.StationPopupBadgeWrapper>
          <Styled.StationPopupBadge
            status={getStationStatusType(
              station.ServiceStatus,
              station.AvailableRentBikes
            )}
          >
            <i className="fas fa-bicycle"></i>
            {station.AvailableRentBikes}
          </Styled.StationPopupBadge>
          <Styled.StationPopupBadge
            status={getStationStatusType(
              station.ServiceStatus,
              station.AvailableReturnBikes
            )}
          >
            <i className="fas fa-parking"></i>
            {station.AvailableReturnBikes}
          </Styled.StationPopupBadge>
        </Styled.StationPopupBadgeWrapper>
        <Styled.StationPopupStatus>
          <i className="fas fa-lightbulb"></i>
          {ServiceStatus[station.ServiceStatus]}
        </Styled.StationPopupStatus>
      </Styled.StationPopupInfo>
    </Popup>
  )
}

export default StationPopup
