import React, { useState, useEffect } from 'react';
import OrdersDataCard from './OrdersDataCard';
import { siteRequest } from '../../../util/requestMethod'; // Update the path to your axios utility file

export default function OrdersData() {
  // Define state to hold the fetched order data
  const [ordersData, setOrdersData] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Define an async function to fetch order history
    
      
       // const response = await fetchOrdersHistory();
       
    // Fetch order data from the backend API
    //siteRequest.get('/orders/history')
    siteRequest.get('/orders/accepted')
      .then(response =>  (
         setOrdersData(response?.data)
         //console.log(response.data)
        )
      ).catch((e)=>{
        console.log('Error fetching order history:', e);

      })
        

    
     // Call the async function to fetch data
}, []);

   console.log(ordersData);
// Empty dependency array ensures the effect runs only once

  // Define function to fetch order history using fetch
  // const fetchOrdersHistory = async () => {
  //   try {
  //     const response = await siteRequest.get('/orders/history');
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     throw new Error('Error fetching order history:', error);
  //   }
  // };
  
  return (
    <div className='border-2 border-black bg-white font-sans max-h-full overflow-y-scroll sm:mx-5'>
      <table className='w-full '>
        <thead className='border-black font-semibold sm:table-fixed text-left bg-orangeD1 sticky top-0'>
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
        <tbody>
          {ordersData.map((p, index) => (
            <OrdersDataCard
              key={index} // Make sure to provide a unique key
              id={index+1}
              serv={p.service_type_id==1?"Hotel"+p.table_or_room_number : p.service_type_id==2?"Cafe"+p.table_or_room_number: "Rest"+p.table_or_room_number}
              order={p.item_name}
              customer={p.customer_name}
              phone={p.customer_phone_number}
              total={p.total_cost}
              status={p.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
