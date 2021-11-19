import { useCallback } from 'react'
import { Marker as LeafMarker, Popup } from 'react-leaflet'
import { Station } from '../../../store/station'
// import {  } from './styled'
import L from 'leaflet'
import stationDefaultSvg from '../../../assets/images/station-default.svg'
import stationLimitedSvg from '../../../assets/images/station-limited.svg'
import stationDisabledSvg from '../../../assets/images/station-disabled.svg'
import { DisplayStationStatus } from '../../../store/types'

const stationIcons = [stationDefaultSvg, stationLimitedSvg, stationDisabledSvg].map(svg => {
  return new (L.icon as any)({
    iconUrl: svg,
    iconSize: [29, 39],
    iconAnchor: [15, 20],
    popupAnchor: [0, -10]
  })
})

const StationMarker = ({ station, key, type }: { station: Station, key: string, type: DisplayStationStatus }) => {
  const displayIcon = useCallback((station: Station, type: DisplayStationStatus) => {
    if (station.ServiceStatus !== 1) return stationIcons[2]
    if (type === DisplayStationStatus.Rent) {
      return station.AvailableRentBikes <= 5 ? stationIcons[1] : stationIcons[0]
    }
    if (type === DisplayStationStatus.Return) {
      return station.AvailableReturnBikes <= 5 ? stationIcons[1] : stationIcons[0]
    }
    return stationIcons[2]
  }, [])

  return (
    <LeafMarker
      key={key}
      icon={displayIcon(station, type)}
      position={[station.StationPosition.PositionLat, station.StationPosition.PositionLon]}
    >
      <Popup>
        <h1>{station.StationName.Zh_tw.split('_')[1]}</h1>
        <p>{station.AvailableRentBikes}</p>
        <p>{station.AvailableReturnBikes}</p>
        <p>{station.ServiceStatus}</p>
      </Popup>
    </LeafMarker>
  )
}

export default StationMarker