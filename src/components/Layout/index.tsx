import { useCallback, useEffect, useRef, useState } from 'react'
import SearchList from '../SearchList'
import PositionButton from '../PositionButton'
import ToggleDisplayButton from '../ToggleDisplayButton'
import L from 'leaflet'

const Layout = () => {
  const domRef = useRef(null)
  const [openSearchList, setOpenSearchList] = useState(false)

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
      <SearchList
        openSearchList={openSearchList}
        unfoldButtonClick={setOpenSearchList}
      />
      <ToggleDisplayButton />
      <PositionButton openSearchList={openSearchList}/>
    </div>
  )
}

export default Layout