import { Marker as LeafMarker, Tooltip } from 'react-leaflet'
import * as Styled from './styled'
import L from 'leaflet'
// import userPositionSvg from '../../../assets/images/user-position.svg'
import userPositionSvg from '../../../assets/images/dribbble-unscreen.gif'

const userPositionIcon = new (L.icon as any)({
  iconUrl: userPositionSvg,
  iconSize: [120, 90],
  iconAnchor: [60, 45],
  popupAnchor: [1, -90],
})

const PositionMarker = ({ position }: { position: [number, number] }) => {
  return (
    <LeafMarker
      data-tip
      data-for="postitionMarker"
      icon={userPositionIcon}
      position={position}
    >
      <Tooltip offset={[20, 0]}>
        <Styled.TooltipContentWrapper>現在位置</Styled.TooltipContentWrapper>
      </Tooltip>
    </LeafMarker>
  )
}

export default PositionMarker
