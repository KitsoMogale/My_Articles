import { Iot } from './articles/Iot'
import {Layout} from './components/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import { PodcastReview } from './articles/PodcastReview'
import { PortfolioOfEvidence } from './articles/PortfolioOfEvidence'
import {TBONTB} from './articles/ToBeOrNotToBe'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Iot/>}/>
       <Route path='podcastReview' element={<PodcastReview/>}/>
       <Route path='porfolioOfEvidence' element={<PortfolioOfEvidence/>}/>
       <Route path='ToBeOrNotToBe' element={<TBONTB/>}/>
      </Route>
      
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

