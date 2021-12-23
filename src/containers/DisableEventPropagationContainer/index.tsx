import React, { useCallback, useEffect, useRef } from 'react'
import L from 'leaflet'

const DisableEventPropagationContainer = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </div>
  )
}

export default DisableEventPropagationContainer