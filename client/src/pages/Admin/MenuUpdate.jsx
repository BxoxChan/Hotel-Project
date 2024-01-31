import React from 'react'
import SideBarMenu from '../../components/Admin/SideBarMenu'
import UpdateComp from '../../components/Admin/MenuUpdate/UpdateComp'
import MenuList from '../../components/Admin/MenuUpdate/MenuList'

export default function MenuUpdate() {
  return (
   <div className='mx-0 px-0 box-border h-screen sm:flex sm:border-black sm:h-screen'>
         <div className='w-1/5 shadow-shadowCust z-10 '><SideBarMenu/></div>

         <div className='w-4/5 bg-Cust1 h-screen'>
          <div className='h-2/5 border-2 flex justify-center items-center'>
            <UpdateComp/>
          </div>
          <div className='h-3/5'>
           <MenuList/>
          </div>
        </div>

    </div>
  )
}
