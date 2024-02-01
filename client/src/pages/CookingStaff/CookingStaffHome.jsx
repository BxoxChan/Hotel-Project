import React from 'react'
import OrderComp from '../../components/CookingStaff/OrderComp'
import AcceptedOrder from '../../components/CookingStaff/AcceptedOrder'

export default function CookingStaffHome() {
  return (
    <div className='h-screen overflow-y-scroll'>
        <header className='text-center bg-orangeD1  font-Ubuntu  text-4xl py-5 text-white'>MEJBAN</header>
        <h1 className='bg-black text-white text-center text-2xl italic'>Orders</h1>
        <div className='h-4/5  mt-2 mx-2'>

            {/* New Orders */}
            <div className='h-1/2 border-2 border-red-400'>
                 <h1 className='text-white text-xl bg-orange-400 font-bold'>Orders in Queue...</h1>

                 <div className='h-90%  w-full flex overflow-x-scroll  snap-x py-2'>
                    <div className='w-1/2 mx-1'>
                      <OrderComp />
                    </div>
                    <div className='w-1/2 mx-1'>
                      <OrderComp/>
                    </div>
                    <div className='w-1/2 mx-1'>
                      <OrderComp/>
                    </div>
                    
                     
                    {/* <div className='h-4/5 border-2 border-red-500 m-1 rounded-md w-1/2'>
                    </div> */}
                    
                 </div>
            </div>

            {/* Order History */}

            <div className='h-1/2 border-2 border-red-400 mt-2'>
            <h1 className='text-white text-xl bg-red-500'>Orders History...</h1>
              <div className='w-full h-90% border-black border-2 overflow-y-scroll p-2'>
                  {/* <OrderComp/> */}
                  <AcceptedOrder accept={true} complete={false} paid={false}/>
                  <AcceptedOrder accept={true} complete={true} paid={false}/>
                  <AcceptedOrder accept={true} complete={true} paid={true}/>
              </div>
            </div>
        </div>

        {/* Order Processing */}
        {/* <div>
          <div className='h-1/2 border-2 border-red-400 mt-2'>
            <h1 className='text-white text-xl bg-gray-400'>Orders Processing...</h1>
              <div className='w-full h-90% border-black border-2 overflow-y-scroll p-2'>
                  <OrderComp/>
                  <OrderComp/>
                  <OrderComp/>
              </div>
            </div>
        </div> */}
    </div>
  )
}
