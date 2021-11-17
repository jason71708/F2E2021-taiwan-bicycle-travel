
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { MapContainer as Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { Routes } from '../../types/routes'
import SearchList from '../SearchList'

const test: [number, number][] = [
  [24.178695, 120.64501],
  [24.167898, 120.638895],
  [24.161438, 120.648701]
]

const MapContainer = () => {
  return (
    <Map
      style={{ height: '100%', width: '100%' }}
      center={[23.703875, 120.982024]}
      zoom={8}
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
        {test.map((tes, index) => (
          <Marker key={index} position={tes}>
            <Popup>
              My position <br /> {tes.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </Map>
  )
}

export default MapContainer