import { useMemo } from 'react'
import { Marker as LeafMarker, Popup } from 'react-leaflet'
import { Station } from '../../../store/station'
import L from 'leaflet'
import { DisplayTypes } from '../../../constants'
import StationIcon from './StationIcon'
import ReactDOMServer from 'react-dom/server'
import { StationStatus } from '../../../constants'
import { useMap } from 'react-leaflet'

const generateStationIcon = (status: StationStatus, quantity: number) => {
  return L.divIcon({
    iconSize: [45, 60],
    iconAnchor: [22.5, 30],
    popupAnchor: [175, 180],
    html: ReactDOMServer.renderToString(<StationIcon status={status} quantity={quantity} />)
  })
}

const StationMarker = ({ station, type }: { station: Station, key: string, type: DisplayTypes }) => {
  const map = useMap()
  const displayIcon = useMemo(() => {
    if (station.ServiceStatus !== 1) return generateStationIcon(StationStatus.Disabled, 0)
    return generateStationIcon(
      type === DisplayTypes.Bike ? station.AvailableRentBikes <= 5 ? StationStatus.Limited : StationStatus.Default
        : station.AvailableReturnBikes <= 5 ? StationStatus.Limited : StationStatus.Default,
      type === DisplayTypes.Bike ? station.AvailableRentBikes : station.AvailableReturnBikes
    )
  }, [station.AvailableRentBikes, station.AvailableReturnBikes, station.ServiceStatus, type])

  return (
    <LeafMarker
      icon={displayIcon}
      position={[station.StationPosition.PositionLat, station.StationPosition.PositionLon]}
      eventHandlers={{
        click: () => {
          map.flyTo([station.StationPosition.PositionLat, station.StationPosition.PositionLon])
        }
      }}
    >
      <Popup closeButton={false} minWidth={350} maxHeight={100}>
        <h1>{station.StationName.Zh_tw.split('_')[1]}</h1>
        <p>{station.AvailableRentBikes}</p>
        <p>{station.AvailableReturnBikes}</p>
        <p>{station.ServiceStatus}</p>
      </Popup>
    </LeafMarker>
  )
}

export default StationMarker