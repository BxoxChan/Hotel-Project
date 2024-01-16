import React from 'react'
import { BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import Home from './pages/Home'
import Cafe from './pages/Cafe'
import Resturant from './pages/Resturant/Resturant'
import Hotel from './pages/Hotel/Hotel'
import CafeConfirm from './pages/CafeConfirm'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cafe' element={<Cafe/>}/>
            <Route path='/cafe/confirmOrderCafe' element={<CafeConfirm/>}/>
            <Route path='/resturant' element={<Resturant/>}/>
            <Route path='/hotel' element={<Hotel/>}/>
        </Routes>
        </Router>
    </div>
  )
}

