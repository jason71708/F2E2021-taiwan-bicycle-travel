import { useMemo } from 'react'
import { Marker as LeafMarker } from 'react-leaflet'
import { Station } from '../../../store/station'
import L from 'leaflet'
import { DisplayTypes } from '../../../constants'
import StationIcon from './StationIcon'
import ReactDOMServer from 'react-dom/server'
import { StationStatus } from '../../../constants'
import { useMap } from 'react-leaflet'
import StationPopup from './StationPopup'
import { getStationStatusType } from '../../../utils'
import useBreakpoint from '../../../hooks/useBreakpoint'

const generateStationIcon = (
  status: StationStatus,
  quantity: number,
  isMdbp: boolean
) => {
  return L.divIcon({
    iconSize: [45, 60],
    iconAnchor: [22.5, 30],
    popupAnchor: isMdbp ? [175, 140] : [0, -25],
    html: ReactDOMServer.renderToString(
      <StationIcon status={status} quantity={quantity} />
    ),
  })
}

const StationMarker = ({
  station,
  type,
}: {
  station: Station
  type: DisplayTypes
}) => {
  const map = useMap()
  const isMdbp = useBreakpoint('md')

  const displayIcon = useMemo(() => {
    if (station.ServiceStatus !== 1)
      return generateStationIcon(StationStatus.Disabled, 0, isMdbp)
    return generateStationIcon(
      getStationStatusType(
        station.ServiceStatus,
        type === DisplayTypes.Bike
          ? station.AvailableRentBikes
          : station.AvailableReturnBikes
      ),
      type === DisplayTypes.Bike
        ? station.AvailableRentBikes
        : station.AvailableReturnBikes,
      isMdbp
    )
  }, [
    station.AvailableRentBikes,
    station.AvailableReturnBikes,
    station.ServiceStatus,
    type,
    isMdbp,
  ])

  return (
    <LeafMarker
      icon={displayIcon}
      position={[
        station.StationPosition.PositionLat,
        station.StationPosition.PositionLon,
      ]}
      eventHandlers={{
        click: () => {
          map.flyTo([
            station.StationPosition.PositionLat,
            station.StationPosition.PositionLon,
          ])
        },
      }}
    >
      <StationPopup station={station} />
    </LeafMarker>
  )
}

export default StationMarker
