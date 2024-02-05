import React from 'react'

export default function Footer() {
  return (
    <div className='w-full'>
        <div className='bg-Custblue text-white py-5'>
        <header className='text-orangeD1 text-4xl font-bold text-center '>Mejban Empire</header>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-xl mb-3">Contact Us</h2>
        <nav class="list-none mb-10 px-7">
          <li className='flex justify-between'>
            <span class="text-gray-600 hover:text-gray-800">Mejban Cafe</span>
            <span>9198889</span>
          </li>
          <li className='flex justify-between'>
            <span class="text-gray-600 hover:text-gray-800">MejBan Hotel</span>
            <span></span>
          </li>
          <li className='flex justify-between'>
            <span class="text-gray-600 hover:text-gray-800">Mejban Restaurant</span>
            <span></span>
          </li>
          <li className='flex justify-between'>
            <span class="text-gray-600 hover:text-gray-800">Email</span>
            <span></span>
          </li>
        </nav>
      </div>
      </div>    
        </div>
    </div>
  )
}


