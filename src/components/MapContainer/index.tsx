
import { useEffect, useRef, useState } from 'react'
import { MapContainer as Map, TileLayer } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { stationRequestAction } from '../../store/station'
import { Routes } from '../../constants/routes'
import { GeolocationInitialState } from '../../store/geolocation'
import Layout from '../Layout'
import Markers from '../Marks'

const MapContainer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const positionHistory = useRef<GeolocationInitialState['position']>(null)
  const [map, setMap] = useState<LeafletMap | null>(null)
  const { data } = useSelector(
    (state: RootState) => state.station
  )
  const position = useSelector(
    (state: RootState) => state.geolocation.position
  )
  const { type } = useSelector(
    (state: RootState) => state.displayType
  )

  useEffect(() => {
    if (data.length > 0 && map) {
      map.flyTo([data[0].StationPosition.PositionLat, data[0].StationPosition.PositionLon], 18, { animate: false })
    }
  }, [data, map])

  useEffect(() => {
    if (
      positionHistory.current === null
      && position
      && map
    ) {
      dispatch(stationRequestAction({ position }))
      map.flyTo([position[0], position[1]], 18, { animate: false })
    }
    positionHistory.current = position
  }, [position, map, dispatch])

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
      {data.map(station => (
        <Markers.StationMarker
          type={type}
          key={station.StationID}
          station={station}
        />
      ))}
    </Map>
  )
}

export default MapContainer