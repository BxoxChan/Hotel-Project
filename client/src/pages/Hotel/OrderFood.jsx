import React from 'react'
import SearchBar from '../../components/SearchBar'
import MenuComp from '../../components/MenuComp'

export default function OrderFood() {
    const order=true;
  return (
    <div className='h-full relative'>
    <header className='text-center bg-black  font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN  <span className='text-4xl font-bold text-orangeD1'>Hotel</span></header>
    <SearchBar/>
    <div className=''>
    <MenuComp/>
    </div>
    {
       order && <button className='w-full sticky bottom-0 bg-orangeD1 text-white py-2 text-2xl font-bold'>Book</button>
    }
    </div>
  )
}
