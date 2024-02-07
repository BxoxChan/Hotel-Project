import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import OrderComp from '../../components/CookingStaff/OrderComp';
import AcceptedOrder from '../../components/CookingStaff/AcceptedOrder';

export default function CookingStaffHome() {
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    fetchNewOrders();
  }, []); // Empty dependency array means this effect runs once after the first render

  const fetchNewOrders = async () => {
    const url = 'http://localhost:3000/orders/new';
    console.log('Fetching new orders from:', url);
    try {
      const response = await axios.get(url);
      console.log('Response data:', response.data);
      if (!response.data || !Array.isArray(response.data)) {
        throw new Error('Invalid data received');
      }
      setNewOrders(response.data);
    } catch (error) {
      console.error('Error fetching new orders:', error);
    }
  };

  return (
    <div className='h-screen overflow-y-scroll'>
      <header className='text-center bg-orangeD1 font-Ubuntu text-4xl py-5 text-white'>MEJBAN</header>
      <h1 className='bg-black text-white text-center text-2xl italic'>Orders</h1>
      <div className='h-4/5 mt-2 mx-2'>

        {/* New Orders */}
        <div className='h-1/2 border-2 border-red-400'>
          <h1 className='text-white text-xl bg-orange-400 font-bold'>Orders in Queue...</h1>

          <div className='h-90% w-full flex overflow-x-scroll snap-x py-2'>
            {newOrders.map(order => (
              <div className='w-1/2 mx-1' key={order.id}>
                <OrderComp order={order} />
              </div>
            ))}
          </div>
        </div>

        {/* Order History */}
        {/* <div className='h-1/2 border-2 border-red-400 mt-2'>
          <h1 className='text-white text-xl bg-red-500'>Orders History...</h1>
          <div className='w-full h-90% border-black border-2 overflow-y-scroll p-2'>
            <AcceptedOrder accept={true} complete={false} paid={false}/>
            <AcceptedOrder accept={true} complete={true} paid={false}/>
            <AcceptedOrder accept={true} complete={true} paid={true}/>
          </div>
        </div> */}
      </div>
    </div>
  );
}

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