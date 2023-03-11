import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Add/>
     
    </div>
  )
}

export default App
