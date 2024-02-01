import React from 'react'
import OrderCardComp from './OrderCardComp'
import { data } from '../../../util/data'

export default function OrdersTable({comp}) {
  return (
    <>
    {/* Default Comp is  Cafe*/}
    <table className='w-full h-full table-fixed '>
      <thead className=' border-black font-semibold table-fixed text-left bg-orangeD1 sticky top-0'>
        <tr>
        <th>ID</th>
        <th>Service</th> 
        <th>Customer</th>
        <th>Orders</th>
        <th>Mobile</th>
        <th>Total</th>
        <th>Payment</th>
        </tr>
      </thead>
         {/* orderData Card */}
        <tbody>
           {/* {dummyMenu.map((m)=>(
            <MenuCard
           image={m.image}
           dish={m.dish}
           price={m.price}
           servicesIn={m.servicesIn}
           status={m.status}
           />
           ))} */}

          {
          data.filter((m)=>(
           m.serv===comp
          )).map((p)=>(
        <OrderCardComp
         id={p.id}
        serv={p.serv}
        order={p.order}
        customer={p.customer}
        phone={p.phone}
        total={p.total}
        status={p.status}/>
          ))
}
        </tbody>
         </table>
    </>
  )
}
