import React from 'react'
import Cafe from '../../src/jailS2.jpg'
import { NavLink, redirect } from 'react-router-dom'

export default function Home() {

  return (
    <div className='h-full w-full bg-Cust1'>
      {/* Header */}
         <div className='flex justify-between bg-black py-2 px-1 sticky top-0 z-10'>
          <header className='text-orangeD1 text-2xl font-bold'>Mejban Empire</header>
          <div className='flex justify-between items-center gap-x-5 mx-1'> 
            <NavLink to={"/QR"} className='bg-orangeD1 text-white font-bold px-2 rounded-md'>ScanQR</NavLink>
          <button className='bg-orangeD1 text-white font-bold px-2 rounded-md'>Login</button>
          </div>
         </div>

          {/* image Slider */}
         <div>
          
         </div>

         {/* Services */}

          <div>
            <header className='text-center text-orangeD1 text-3xl font-bold font-Montserrat'>Services</header>
            <div className=' px-2'>

                <div className='w-3/5 mr-auto relative py-2 '>
                  <img src={Cafe} alt="cafe" className=' brightness-75 rounded-md' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Jail Cafe</header>
                  <p className='text-white'>Our Jail Theme Cafe with 150+ Items ,<span>perfect place for you to spend some lovely moments</span></p>
                  </div>
                </div>
                <div className='w-3/5 ml-auto  relative py-2'>
                   <img src={Cafe} alt="cafe" className=' brightness-75 rounded-md' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Resturant</header>
                  <p className='text-white'>Our Jail Theme Cafe with 150+ Items ,<span>perfect place for you to spend some lovely moments</span></p>
                  </div>
                </div>

                <div className='w-3/5 mr-auto  relative py-2'>
                  <img src={Cafe} alt="cafe" className=' brightness-75 rounded-md' />
                  <div className='absolute bottom-5 pl-2 w-full'>
                  <header className=' text-white font-bold text-3xl'>MejBan Hotel</header>
                  <p className='text-white'>Our Jail Theme Cafe with 150+ Items ,<span>perfect place for you to spend some lovely moments</span></p>
                  </div>
                </div>
            </div>
          </div>

    </div>
  )
}
