import { useEffect, useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { Routes } from './types/routes'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Town } from './types/api'
import { fetchRequest } from './utils/api'
import MarkerClusterGroup from 'react-leaflet-markercluster'

const test: [number, number][] = [
  [24.178695, 120.64501],
  [24.167898, 120.638895],
  [24.161438, 120.648701]
]

function App() {
  const [code, setCode] = useState<Town[]>([])

  useEffect(() => {
    fetchRequest<Town[]>('./data/town.json').then(data => {
      setCode(data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <BrowserRouter basename={process.env.REACT_APP_GITHUB_PAGE_PATH}>
      <Header />
      <RouterRoutes>
        <Route path="/" element={<Navigate to={Routes.Bicycle} replace={true} />}></Route>
        <Route path={Routes.Bicycle} element={<div>Bicycle</div>}></Route>
        <Route path={Routes.Routes} element={<div>Routes</div>}></Route>
        {/* <Route path="*" element={<ProblemPlaceholder problem={Problems.PageNotFound}/>} /> */}
      </RouterRoutes>
      <MapContainer
        style={{ height: 600, width: 1200 }}
        center={[24.172421, 120.6481]}
        zoom={10}
        scrollWheelZoom={true}
        zoomControl={false}
      >
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
      </MapContainer>
      <code>
        {JSON.stringify(code)}
      </code>
    </BrowserRouter>
  )
}

export default App
