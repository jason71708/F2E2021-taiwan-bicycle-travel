import { useEffect, useRef, useState } from 'react'
import { MapContainer as Map, TileLayer } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { stationRequestAction } from '../../store/station'
import { Routes } from '../../constants/routes'
import { GeolocationInitialState } from '../../store/geolocation'
import DisableEventPropagationContainer from '../DisableEventPropagationContainer'
import BicyclePage from '../BicyclePage'
import RoutePage from '../RoutePage'
import Markers from '../../components/Marks'
import RouteSet from '../../components/Marks/RouteSet'

const MapContainer = () => {
  const dispatch = useDispatch<AppDispatch>()
  const positionHistory = useRef<GeolocationInitialState['position']>(null)
  const [map, setMap] = useState<LeafletMap | null>(null)
  const { data: stations } = useSelector((state: RootState) => state.station)
  const { current: currentRoute } = useSelector(
    (state: RootState) => state.route
  )
  const { position, center } = useSelector(
    (state: RootState) => state.geolocation
  )
  const { type } = useSelector((state: RootState) => state.displayType)

  useEffect(() => {
    if (stations.length > 0 && map) {
      map.flyTo(center, 16, { animate: false })
    }
  }, [stations, center, map])

  useEffect(() => {
    if (currentRoute && map) {
      map.flyTo(currentRoute.Routes[0][0], 16, { animate: false })
    }
  }, [map, currentRoute])

  useEffect(() => {
    if (positionHistory.current === null && position && map) {
      if (/\/bicycle$/.test(window.location.pathname)) {
        dispatch(stationRequestAction({ position }))
      } else {
        map.flyTo(position, 16, { animate: false })
      }
    }
    positionHistory.current = position
  }, [position, dispatch, map])

  return (
    <Map
      style={{ height: '100%', width: '100%' }}
      center={center}
      zoom={8}
      whenCreated={setMap}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <DisableEventPropagationContainer>
        <RouterRoutes>
          <Route
            path="/"
            element={<Navigate to={Routes.Bicycle} replace={true} />}
          ></Route>
          <Route path={Routes.Bicycle} element={<BicyclePage />}></Route>
          <Route path={Routes.Routes} element={<RoutePage />}></Route>
        </RouterRoutes>
      </DisableEventPropagationContainer>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {position && <Markers.PositionMarker position={position} />}
      {stations.map((station) => (
        <Markers.StationMarker
          type={type}
          key={station.StationID}
          station={station}
        />
      ))}
      {currentRoute &&
        currentRoute.Routes.map((polyline, index) => (
          <RouteSet key={`route-${index}`} polyline={polyline} />
        ))}
    </Map>
  )
}

export default MapContainer
