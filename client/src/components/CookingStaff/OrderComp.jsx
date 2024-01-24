import React from 'react'

export default function OrderComp() {
  return (
    <div className='px-2 h-full overflow-y-scroll border-2 border-red-500  rounded-md'>
        <div className='flex justify-between '>
        <div className=''>
        <h1 className='font-bold '>Table</h1>
        <span>#C01</span>
        </div>
        {/* order status */}
        <div className='mt-5'>
        <button className='rounded-sm px-2 bg-green-400 text-white'>Accept</button>
        </div>
        </div>

        <div>
            <h1 className='font-bold'>Name</h1>
            <span>{"#Bhaskar"}</span>
        </div>

         <h1 className='font-bold'>Order{"(4)"}</h1>
        <div className='border-2  overflow-y-scroll h-1/3'>
            <div className='flex justify-between px-2 border '>
            <li className='w-3/4'>#Manchurian kofta</li>
            <span>{"1"}</span>
            </div>
            <div className='flex justify-between px-2 border'>
            <li>#Noodles</li>
            <span>{"1/2"}</span>
            </div>
            <div className='flex justify-between px-2 border'>
            <li>#Momo</li>
            <span>{"1"}</span>
            </div>
            <div className='flex justify-between px-2 border'>
            <li>#Momo</li>
            <span>{"1"}</span>
            </div>
        </div>

        <div className=''>
          <h1 className='font-bold'>Additions</h1>  
          <p>{"- extra cheese"}</p>
        </div>

        <div className='flex justify-between'>
            <h1 className='font-bold'>Amount</h1>
            <h1>₹<span className='text-green-400'>{"1900"}</span></h1>
        </div>
    </div>
  )
}
