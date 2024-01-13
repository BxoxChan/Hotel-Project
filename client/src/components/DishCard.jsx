import React from 'react'
import ima from '../../public/cafeBG.jpg'

export default function DishCard() {
  return (
    <>
        <div className='flex py-2 border my-1'>
            <div className='w-1/3 p-2 '>
                <img src={ima} alt="dish" className='rounded-md'/>
            </div>
            <div className='w-2/3 border-2 border-black mx-1 text-gray-500'>
                <div className='font-bold text-3xl'>Name</div>
                <div>price</div>
                <div>italian,chinese</div>
            </div>
        </div>
    </>
  )
}
