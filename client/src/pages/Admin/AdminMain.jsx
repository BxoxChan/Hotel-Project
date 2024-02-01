import React from 'react'
import SideBarMenu from '../../components/Admin/SideBarMenu'
import OrdersCard from '../../components/Admin/DashBoardComp/OrdersCard'
import OrdersData from '../../components/Admin/DashBoardComp/OrdersData'

export default function AdminMain() {
  return (
    <div className='mx-0 px-0 box-border h-screen sm:flex  sm:border-black sm:h-screen'>
        <div className='w-1/5 shadow-shadowCust z-10 '><SideBarMenu/></div>

        {/* <div className='h-full bg-black w-1'></div> */}
        <div className='w-4/5 bg-Cust1'>
            <div className='h-2/5 border-2 flex w-full justify-around items-center'>
              <OrdersCard type={"cafe"}/>
              <OrdersCard type={"resturant"}/>
              <OrdersCard type={"hotel"}/>
            </div>

            <div className='h-3/5'>
              <OrdersData/>
            </div>
        </div>
    </div>
  )
}
