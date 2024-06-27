import { useState } from 'react'
import { Iot } from './articles/Iot'
import {Layout} from './components/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
       <Iot/>
      </Route>
      
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
