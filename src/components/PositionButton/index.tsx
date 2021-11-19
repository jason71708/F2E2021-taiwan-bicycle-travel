import { useState } from 'react'
import { PositionButtonWrapper } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store'
import { geolocationUpdateAction, geolocationResetAction } from '../../store/geolocation'

const PositionButton = () => {
  const [watchPositionId, setWatchPositionId] = useState<number | null>(null)
  const [locating, setLocating] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const position = useSelector(
    (state: RootState) => state.geolocation.position
  )

  const positionHandler = () => {
    if ('geolocation' in navigator) {
      if (position) {
        stopWatchPositionAndReset()
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

  const stopWatchPositionAndReset = () => {
    if (watchPositionId) {
      navigator.geolocation.clearWatch(watchPositionId)
      dispatch(geolocationResetAction())
    }
  }

  return (
    <PositionButtonWrapper
      active={!!position}
      locating={locating}
      onClick={() => positionHandler()}
    >
      <i className="fas fa-crosshairs"></i>
    </PositionButtonWrapper>
  )
}

export default PositionButton