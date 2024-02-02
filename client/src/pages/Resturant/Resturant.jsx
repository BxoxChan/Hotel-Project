import React from 'react'
import SearchBar from '../../components/SearchBar'
import MenuComp from '../../components/MenuComp'
import { NavLink } from 'react-router-dom'

export default function Resturant() {
  return (
    <div className='bg-resturant bg-cover bg-no-repeat relative h-screen '>
     <header className='text-center text-black  font-Ubuntu text-3xl py-5 bg-orangeD1'>MEJBAN  <span className='text-4xl font-bold text-black'>Resturant</span></header>
       {/* <SearchBar/>
        <MenuComp/> */}

         <div className="h-85% border-2">
        <SearchBar/>
        <MenuComp/>
        </div>
        {/* place order */}

        <NavLink to={"/cafe/confirmOrderCafe"} className ="bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center">Cart</NavLink>
    
    </div>
  )
}
