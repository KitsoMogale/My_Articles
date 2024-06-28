import { useState } from 'react'
import { Iot } from './articles/Iot'
import {Layout} from './components/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { PodcastReview } from './articles/PodcastReview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Iot/>}/>
       <Route path='podcastReview' element={<PodcastReview/>}/>
      </Route>
      
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
