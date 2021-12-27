import { Marker as LeafMarker, Tooltip } from 'react-leaflet'
import { TooltipContentWrapper } from '../../../styles/globalStyled'
import L from 'leaflet'
import RouteIcon from './RouteIcon'
import ReactDOMServer from 'react-dom/server'
import { useMap } from 'react-leaflet'

const generateRouteIcon = () => {
  return L.divIcon({
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    html: ReactDOMServer.renderToString(<RouteIcon />),
  })
}

const RouteMarker = ({
  routeSection,
  sectionName,
}: {
  routeSection: [number, number]
  sectionName: string
}) => {
  const map = useMap()
  const displayIcon = generateRouteIcon()

  return (
    <LeafMarker
      icon={displayIcon}
      position={routeSection}
      eventHandlers={{
        click: () => {
          map.flyTo(routeSection)
        },
      }}
    >
      <Tooltip offset={[15, -20]}>
        <TooltipContentWrapper>{sectionName}</TooltipContentWrapper>
      </Tooltip>
    </LeafMarker>
  )
}

export default RouteMarker
