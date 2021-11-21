import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { PositionButtonWrapper } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { geolocationUpdateAction, geolocationResetAction } from '../../store/geolocation'
import { stationRequestAction } from '../../store/station'

const PositionButton = ({ openSearchList }: { openSearchList: boolean }) => {
  const [watchPositionId, setWatchPositionId] = useState<number | null>(null)
  const [locating, setLocating] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const position = useSelector(
    (state: RootState) => state.geolocation.position
  )

  const positionHandler = () => {
    if ('geolocation' in navigator) {
      if (position) {
        // stopWatchPositionAndReset()
        dispatch(stationRequestAction({ position }))
      } else {
        watchPositionAndUpdate()
      }
    } else {
      alert('Geolocation is not supported by your browser')
    }
  }

  const watchPositionAndUpdate = () => {
    setLocating(true)
    const watchId = navigator.geolocation.watchPosition(position => {
      dispatch(geolocationUpdateAction({
        position: [position.coords.latitude, position.coords.longitude]
      }))
      setLocating(false)
    }, error => {
      alert('Unable to retrieve your location')
      setLocating(false)
    })
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
      <PositionButtonWrapper
        openSearchList={openSearchList}
        data-tip
        data-for="postitionButton"
        active={!!position}
        locating={locating}
        onClick={() => positionHandler()}
      >
        <i className="fas fa-crosshairs"></i>
      </PositionButtonWrapper>
      <ReactTooltip id='postitionButton' place="right" type="dark" effect="solid">
        搜尋附近
      </ReactTooltip>
    </>
  )
}

export default PositionButton