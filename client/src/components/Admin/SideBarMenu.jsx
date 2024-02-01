import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBarMenu() {
  return (
    <div className='h-full relative bg-white'>
        <header className='font-bold text-center bg-black text-orangeD1 font-Montserrat  py-2 '>MejBan</header>
        
        <div className='sm:h-1/2 sm:flex sm:flex-col justify-around mt-5'>
          <NavLink to={"/admin"} className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center'>DashBoard</NavLink>
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>DashBoard</button> */}
        
        <NavLink to={"/admin/orders"} className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center'>Orders</NavLink>
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>Orders</button> */}
        <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>Sales</button>
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>Menu Update</button> */}
        <NavLink to={"/admin/menuUpdate"} className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center'>Menu Update</NavLink>
        {/* <button className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl'>Hotel Services</button> */}
        <NavLink to={"/admin/hotelServices"} className='sm:w-1/2 bg-orangeD1 mx-auto p-2 text-white  font-Roboto rounded-xl flex justify-center'>Hotel Services</NavLink>

        </div>

        <footer className='absolute bottom-2  w-full flex flex-col items-center py-1'>
           <div className=' border-black w-3/4'>
            Admin <span className='text-gray-500 text-xs'>{"#Akash"}</span>
           </div>
           <hr className='bg-black h-px my-2 w-4/5'/>
           <button className='bg-red-500 text-white w-fit rounded-sm px-1'>Logout</button>
        </footer>
        
    </div>
  )
}
