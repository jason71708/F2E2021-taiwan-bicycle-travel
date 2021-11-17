import styled from 'styled-components'
import breakpoint from './styles/breakpoint'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MapContainer from './components/MapContainer'

const AppContent = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - ${props => props.theme.layout.headerHeight.default});

  ${breakpoint('md')`
    height: calc(100vh - ${props => props.theme.layout.headerHeight.md});
  `}
`

const App = () => {
  // useEffect(() => {
  //   fetchRequest<Town[]>('./data/town.json').then(data => {
  //     setCode(data)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }, [])

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
