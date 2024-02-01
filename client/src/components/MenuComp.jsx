import React from 'react'
import DishCard from './DishCard'

export default function MenuComp() {
  return (
     <div className='h-menu border border-black  mx-2 p-2 overflow-y-scroll backdrop-brightness-75 backdrop-blur-sm'>
      <DishCard/>
      <DishCard/>
      <DishCard/>
      <DishCard/>
      <DishCard/>
      <DishCard/>
      <DishCard/>
    </div>
  )
}
