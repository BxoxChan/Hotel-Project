import React from 'react'
import { BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import Home from './pages/Home'
import Cafe from './pages/Cafe'
import Resturant from './pages/Resturant/Resturant'
import Hotel from './pages/Hotel/Hotel'
import CafeConfirm from './pages/CafeConfirm'
import HotelServices from './pages/Hotel/HotelServices'
import OrderFood from './pages/Hotel/OrderFood'

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
            <Route path='/hotel/orderFood' element={<OrderFood/>}/>
            <Route path='/hotel/hotelServices' element={<HotelServices/>}/>
        </Routes>
        </Router>
    </div>
  )
}

