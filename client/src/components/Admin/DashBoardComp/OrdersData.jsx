import React from 'react'
import OrdersDataCard from './OrdersDataCard'
import {data} from "../../../util/data"; //dummy data

export default function OrdersData() {
  return (
    <div className=' border-2 border-black bg-white font-sans max-h-full overflow-y-scroll sm:mx-5'>
        {/* listStart */}
      {/* <thead className='flex justify-between border-2 border-black font-semibold '> */}
    <table className='w-full '>
      <thead className='border-black font-semibold sm:table-fixed  text-left bg-orangeD1 sticky top-0'>
        <tr className=''>
         <th className=''>ID</th>
         <th>Service</th> 
        <th>Customer</th>
        <th>Orders</th>
        <th>Mobile</th>
        <th>Total</th>
        <th>Payment</th>
        </tr>
      </thead>
         {/* orderData Card */}
        <tbody className=''>
        {data.map((p)=>{
           return( <OrdersDataCard
        id={p.id}
        serv={p.serv}
        order={p.order}
        customer={p.customer}
        phone={p.phone}
        total={p.total}
        status={p.status}
        />)
        })
        }
       
        </tbody>
         </table>

    </div>
  )
}


        {/* <OrdersDataCard
        id="C-3"
        serv="cafe"
        order="Sandwich,Juice,Chai,Burger"
        customer="ABC Sharma"
        phone="986374690"
        total="650"
        status="paid"
        />

        
        <OrdersDataCard
        id="C-3"
        serv="cafe"
        order="Cofee,Kulcha"
        customer="ABC Sharma"
        phone="986374690"
        total="300"
        // status="paid"
        /> */}
