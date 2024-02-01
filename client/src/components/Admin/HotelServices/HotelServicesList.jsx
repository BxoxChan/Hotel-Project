import React from 'react'
import HotelServiceCard from './HotelServiceCard'

export default function HotelServicesList() {
  return (
         <div className=' border-2 border-black bg-white font-sans max-h-full overflow-y-scroll mx-5'>
        {/* listStart */}
      {/* <thead className='flex justify-between border-2 border-black font-semibold '> */}
    <table className='w-full h-full table-fixed'>
      <thead className=' border-black font-semibold table-fixed text-center bg-orangeD1 sticky top-0'>
        <tr>
         <th>Service</th>
         <th>Status</th>
         <th>Update</th>
        </tr>
      </thead>
         {/* orderData Card */}
        <tbody>

             <HotelServiceCard
           service={"Room Cleaning"}
          // status={true}
           />
           {/* {dummyMenu.map((m)=>(
            <MenuCard
           image={m.image}
           dish={m.dish}
           price={m.price}
           servicesIn={m.servicesIn}
           status={m.status}
           />
           ))} */}

        {/* {data.map((p)=>{
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
        } */}
       
        </tbody>
         </table>

   </div>
  )
}
