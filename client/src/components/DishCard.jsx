import React from 'react'
//import ima from '../../public/cafeBG.jpg'

export default function DishCard() {
  
  return (
    <>
        <div className='flex py-2  my-1'>
            <div className='w-1/3 border-black flex justify-center items-center'>
                <img src={'https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA='} alt="dish" className='rounded-md'/>
            </div>
            <div className='w-2/3 border-2 border-black mx-1 bg-white text-gray-500 pl-2'>
                <div className='font-bold text-3xl'>Name</div>
                <div>price</div>
                <div>italian,chinese</div>
            </div>
        </div>
    </>
  )
}
