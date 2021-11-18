import styled from 'styled-components'
import breakpoint from './styles/breakpoint'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MapContainer from './components/MapContainer'

import { AppDispatch, RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { stationRequestAction } from './store/station'

const AppContent = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - ${props => props.theme.layout.headerHeight.default});

  ${breakpoint('md')`
    height: calc(100vh - ${props => props.theme.layout.headerHeight.md});
  `}
`

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pedding, data, error } = useSelector(
    (state: RootState) => state.station
  )

  console.log(pedding, data, error)

  useEffect(() => {
    dispatch(stationRequestAction({ keyword: 'string', city: 'string' }))
  }, [dispatch])

  return (
    <BrowserRouter basename={process.env.REACT_APP_GITHUB_PAGE_PATH}>
      <Header />
      <AppContent>
        <MapContainer />
      </AppContent>
    </BrowserRouter>
  )
}

export default App
