import React from 'react'
import SearchBar from '../../components/SearchBar'
import MenuComp from '../../components/MenuComp'
import { NavLink } from 'react-router-dom';

export default function OrderFood() {
    const order=true;
  return (
    <div className='h-screen relative'>
    <header className='text-center bg-black  font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN  <span className='text-4xl font-bold text-orangeD1'>Hotel</span></header>
    <div className='h-85%'>
    <SearchBar/>
    <MenuComp/>
    </div>
    {
       order && <NavLink to={"/cafe/confirmOrderCafe"} className='w-full absolute bottom-0 bg-orangeD1 text-white py-2 text-2xl font-bold text-center'>Book</NavLink>
    }
    </div>
  )
}
