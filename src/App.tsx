import { useEffect, useState } from "react"
import { Town } from './types/api'
import { fetchRequest } from './utils/api'

function App() {
  const [code, setCode] = useState<Town[]>([])

  useEffect(() => {
    fetchRequest<Town[]>('/data/town.json').then(data => {
      setCode(data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div>
      <h1>App</h1>
      <code>
        {JSON.stringify(code)}
      </code>
    </div>
  )
}

export default App
