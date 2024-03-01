import React, { useState, useEffect } from 'react';
import OrdersDataCard from './OrdersDataCard';
import { siteRequest } from '../../../util/requestMethod'; // Update the path to your axios utility file

export default function OrdersData() {
  // Define state to hold the fetched order data
  const [ordersData, setOrdersData] = useState([]);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Define an async function to fetch order history
    const fetchOrderHistory = async () => {
      try {
        const response = await fetchOrdersHistory();
        setOrdersData(response); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory(); // Call the async function to fetch data
  }, []); // Empty dependency array ensures the effect runs only once

  // Define function to fetch order history using fetch
  const fetchOrdersHistory = async () => {
    try {
      const response = await siteRequest.get('/orders/history');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching order history:', error);
    }
  };

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
              id={p.id}
              serv={p.serv}
              order={p.order}
              customer={p.customer}
              phone={p.phone}
              total={p.total}
              status={p.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
