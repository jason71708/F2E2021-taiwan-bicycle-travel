import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import * as Styled from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import {
  geolocationUpdateAction,
  geolocationResetAction,
} from '../../store/geolocation'
import { stationRequestAction } from '../../store/station'
import { PositionButtonActions } from '../../constants'
import { useMap } from 'react-leaflet'

const PositionButton = ({
  openSearchList,
  action,
}: {
  openSearchList: boolean
  action: PositionButtonActions
}) => {
  const map = useMap()
  const [watchPositionId, setWatchPositionId] = useState<number | null>(null)
  const [locating, setLocating] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const position = useSelector((state: RootState) => state.geolocation.position)

  const positionHandler = () => {
    if ('geolocation' in navigator) {
      if (position) {
        // stopWatchPositionAndReset()
        if (action === PositionButtonActions.Search) {
          dispatch(stationRequestAction({ position }))
        }
        map.flyTo(position)
      } else {
        watchPositionAndUpdate()
      }
    } else {
      alert('Geolocation is not supported by your browser')
    }
  }

  const watchPositionAndUpdate = () => {
    setLocating(true)
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        dispatch(
          geolocationUpdateAction({
            position: [position.coords.latitude, position.coords.longitude],
          })
        )
        setLocating(false)
      },
      (error) => {
        alert('Unable to retrieve your location')
        setLocating(false)
      }
    )
    setWatchPositionId(watchId)
  }

  // const stopWatchPositionAndReset = () => {
  //   if (watchPositionId) {
  //     navigator.geolocation.clearWatch(watchPositionId)
  //     dispatch(geolocationResetAction())
  //   }
  // }

  return (
    <>
      <Styled.PositionButtonWrapper
        openSearchList={openSearchList}
        data-tip
        data-for="postitionButton"
        active={!!position}
        locating={locating}
        onClick={() => positionHandler()}
      >
        <i className="fas fa-crosshairs"></i>
      </Styled.PositionButtonWrapper>
      <ReactTooltip
        id="postitionButton"
        place="right"
        type="dark"
        effect="solid"
      >
        我的位置
      </ReactTooltip>
    </>
  )
}

export default PositionButton
