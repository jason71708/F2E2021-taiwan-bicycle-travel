
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Map as LeafletMap } from 'leaflet';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Routes } from '../../constants/routes'
import SearchList from '../SearchList'
import { useEffect, useState } from 'react'

const MapContainer = () => {
  const [map, setMap] = useState<LeafletMap | null>(null)
  const { data } = useSelector(
    (state: RootState) => state.station
  )

  useEffect(() => {
    if (data.length > 0 && map) {
      map.flyTo([data[0].StationPosition.PositionLat, data[0].StationPosition.PositionLon], 15)
    }
  }, [data, map])

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
        <Route path={Routes.Bicycle} element={<SearchList />}></Route>
        <Route path={Routes.Routes} element={<div>Routes</div>}></Route>
        {/* <Route path="*" element={<ProblemPlaceholder problem={Problems.PageNotFound}/>} /> */}
      </RouterRoutes>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {data.map(station => (
          <Marker key={station.StationUID} position={[station.StationPosition.PositionLat, station.StationPosition.PositionLon]}>
            <Popup>
              <h1>{station.StationName.Zh_tw.split('_')[1]}</h1>
              <p>{station.AvailableRentBikes}</p>
              <p>{station.AvailableReturnBikes}</p>
              <p>{station.ServiceStatus}</p>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </Map>
  )
}

export default MapContainer