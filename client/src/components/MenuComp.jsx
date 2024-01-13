import React from 'react'
import DishCard from './DishCard'

export default function MenuComp() {
  return (
     <div className='h-menu border-2 border-black bg-white mx-2 p-2 overflow-y-scroll'>
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
