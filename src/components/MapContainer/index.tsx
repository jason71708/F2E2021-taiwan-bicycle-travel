
import { useEffect, useRef, useState } from 'react'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { MapContainer as Map, TileLayer } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Routes } from '../../constants/routes'
import { GeolocationInitialState } from '../../store/geolocation'
import Layout from '../Layout'
import Markers from '../Marks'
import { DisplayStationStatus } from '../../store/types'

const MapContainer = () => {
  const positionHistory = useRef<GeolocationInitialState['position']>(null)
  const [map, setMap] = useState<LeafletMap | null>(null)
  const { data } = useSelector(
    (state: RootState) => state.station
  )
  const position = useSelector(
    (state: RootState) => state.geolocation.position
  )

  useEffect(() => {
    if (data.length > 0 && map) {
      map.flyTo([data[0].StationPosition.PositionLat, data[0].StationPosition.PositionLon], 15)
    }
  }, [data, map])

  useEffect(() => {
    if (
      positionHistory.current === null
      && position
      && map
    ) {
      map.flyTo([position[0], position[1]], 17)
    }
    positionHistory.current = position
  }, [position, map])

  return (
    <Map
      style={{ height: '100%', width: '100%' }}
      center={[23.703875, 120.982024]}
      zoom={8}
      whenCreated={setMap}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <RouterRoutes>
        <Route path="/" element={<Navigate to={Routes.Bicycle} replace={true} />}></Route>
        <Route path={Routes.Bicycle} element={<Layout />}></Route>
        <Route path={Routes.Routes} element={<div>Routes</div>}></Route>
        {/* <Route path="*" element={<ProblemPlaceholder problem={Problems.PageNotFound}/>} /> */}
      </RouterRoutes>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {position && (
        <Markers.PositionMarker position={position} />
      )}
      <MarkerClusterGroup>
        {data.map(station => (
          <Markers.StationMarker
            type={DisplayStationStatus.Rent}
            key={station.StationID}
            station={station}
          />
        ))}
      </MarkerClusterGroup>
    </Map>
  )
}

export default MapContainer