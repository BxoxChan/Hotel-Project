import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Food from '../../food.png'
import Services from '../../roomService.jpeg';

export default function Hotel() {
  return (
    <div className='h-screen'>
     <header className='text-center bg-black  font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN  <span className='text-4xl font-bold text-orangeD1'>Hotel</span></header>
     <h1 className='text-center text-3xl font-bold font-Roboto py-2 italic bg-black text-white'>Room Services</h1>
     <div className=' flex flex-col justify-evenly items-center h-menu w-full'>
      <div>
     <li className='list-none  w-full flex justify-center '><img src={Food} className=' h-28'/> </li>
     <div className='text-center text-xl'>Food</div>
      </div>
     <div>
      <li className='list-none  w-full flex justify-center '><img src={Services} className='h-28 '/></li>
     <div className='text-center text-xl'>Others...</div>
     </div>
     {/* <li className='list-none  p-2 text-center w-1/2 bg-orangeD1 text-white rounded-md font-bold border-2 border-black'>Room Services</li> */}
     </div>
    </div>
  )
}
