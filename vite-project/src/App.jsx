import { useState } from 'react'
import { Iot } from './articles/Iot'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Iot/>
    </>
  )
}

export default App
