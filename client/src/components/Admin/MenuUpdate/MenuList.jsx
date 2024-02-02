import React from 'react'
import MenuCard from './MenuCard'

export default function MenuList() {

    const dummyMenu=[{
        image:"",
        dish:"Chicken",
        price:"300",
        servicesIn:["H","R"],
        status:true
    },{
        image:"",
        dish:"Chai",
        price:"300",
        servicesIn:["H","C","R"],
        status:false
    },
    {
        image:"",
        dish:"Sandwich",
        price:"300",
        servicesIn:["H","C"],
        status:false
    },
    {
        image:"",
        dish:"burger",
        price:"300",
        servicesIn:["H","C"],
        status:false
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    {
        image:"",
        dish:"Liquor",
        price:"300",
        servicesIn:["H"],
        status:true
    },
    

]
  return (
    

        <div className=' border-2 border-black bg-white font-sans max-h-full overflow-y-scroll mx-5'>
        {/* listStart */}
      {/* <thead className='flex justify-between border-2 border-black font-semibold '> */}
    <table className='w-full h-full table-fixed'>
      <thead className=' border-black font-semibold table-fixed text-left bg-orangeD1 sticky top-0'>
        <tr>
         <th>Image</th>
         <th>Dish</th>
         <th>Price</th>
         <th>H/R/C</th>
         <th>Status</th>
         <th>Update</th>
         <th>Price(Updt.)</th>
        </tr>
      </thead>
         {/* orderData Card */}
        <tbody>
           {dummyMenu.map((m)=>(
            <MenuCard
           image={m.image}
           dish={m.dish}
           price={m.price}
           servicesIn={m.servicesIn}
           status={m.status}
           />
           ))}

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
