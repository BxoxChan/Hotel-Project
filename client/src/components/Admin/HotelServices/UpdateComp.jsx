import React from 'react'

export default function UpdateComp() {
  return (
    <div className='bg-white w-4/5 h-4/5 rounded-md drop-shadow-md p-2'>
          <h1 className='text-xl font-Raleway underline'>Add a new Service</h1>
          <form className='h-4/5 border-2 flex justify-around items-center'>
            {/* <input type="file" title='image' name="filename"/> */}
            <div className=''>
            <label htmlFor="" className='font-bold'>Name:</label>
            <input type='input' placeholder='Name of Service' className='border'/>
            </div>
            
            <button className='bg-orangeD1 text-white py-2 px-5 rounded-lg'>Add</button>
            
          </form>
    </div>
  )
}
