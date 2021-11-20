import { useCallback, useEffect, useRef } from 'react'
import SearchList from '../SearchList'
import PositionButton from '../PositionButton'
import ToggleDisplayButton from '../ToggleDisplayButton'
import L from 'leaflet'

const Layout = () => {
  const domRef = useRef(null)

  const disableEventPropagation = useCallback(() => {
    if (domRef.current) {
      L.DomEvent.disableClickPropagation(domRef.current);
      L.DomEvent.disableScrollPropagation(domRef.current)
    } else {
      setTimeout(() => {
        disableEventPropagation()
      }, 100)
    }
  }, [])

  useEffect(() => {
    disableEventPropagation()
  }, [disableEventPropagation])

  return (
    <div ref={domRef}>
      <SearchList />
      <ToggleDisplayButton />
      <PositionButton />
    </div>
  )
}

export default Layout