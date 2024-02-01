import React from 'react'
//import ima from '../../public/cafeBG.jpg'

export default function DishCard() {
  
  return (
    <>
        <div className='flex py-2  my-1'>
            <div className='w-1/3 border-2 border-white flex justify-center items-center border-r-0 bg-white rounded-l-md'>
                <img src={'https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA='} alt="dish" className=' w-full h-full' />
            </div>
            <div className='w-2/3 border-2 border-white bg-white text-gray-500 pl-2 rounded-r-md'>
                <div className='font-bold text-3xl font-Montserrat'>Name</div>
                <div className='font-bold text-green-500'>₹500</div>
                <div>italian,chinese</div>
            </div>
        </div>
    </>
  )
}
