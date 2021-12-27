import RouteMarker from '../RouteMarker'
import { Polyline } from 'react-leaflet'
import { Polyline as PolylineType } from '../../../service/tdxApi/types'
import { useMemo } from 'react'
import theme from '../../../styles/theme'

const RouteSet = ({ polyline }: { polyline: PolylineType }) => {
  const polylineOption = useMemo(
    () => ({
      weight: 5,
      color: theme.colors.accent[500],
    }),
    []
  )

  return (
    <>
      <RouteMarker routeSection={polyline[0]} sectionName={'大橋頭'} />
      <RouteMarker
        routeSection={polyline[polyline.length - 1]}
        sectionName={'大橋頭2'}
      />
      <Polyline pathOptions={polylineOption} positions={polyline} />
    </>
  )
}

export default RouteSet
