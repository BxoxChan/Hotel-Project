import React, { useState, useEffect } from 'react';
import axios from 'axios'
import OrderComp from '../../components/CookingStaff/OrderComp'
import AcceptedOrder from '../../components/CookingStaff/AcceptedOrder'

const CookingStaffHome = () => {
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    // Fetch new orders when the component mounts
    fetchNewOrders();
  }, []);

  const fetchNewOrders = async () => {
    try {
      const response = await axios.get('/api/orders/new');
      setNewOrders(response.data);
    } catch (error) {
      console.error('Error fetching new orders:', error);
    }
  };
  
  const acceptOrder = async (orderId) => {
    try {
      await axios.patch(`/api/orders/accept/${orderId}`);
      // You may want to refetch the new orders after accepting one
      fetchNewOrders();
    } catch (error) {
      console.error('Error accepting order:', error);
    }
  };

  const completeOrder = async (orderId) => {
    try {
      await axios.patch(`/api/orders/complete/${orderId}`);
      // You may want to refetch the new orders after completing one
      fetchNewOrders();
    } catch (error) {
      console.error('Error completing order:', error);
    }
  };
  
  return (
    <div className='h-screen overflow-y-scroll'>
      {/* ... (header and other UI elements) ... */}
      <div className='h-4/5 mt-2 mx-2'>
        <div className='h-1/2 border-2 border-red-400'>
          <h1 className='text-white text-xl bg-orange-400 font-bold'>Orders in Queue...</h1>
          <div className='h-90% w-full flex overflow-x-scroll snap-x py-2'>
            {Array.isArray(newOrders) && newOrders.map((order) => (
              <div key={order.OrderID} className='w-1/2 mx-1'>
                <OrderComp order={order} />
                <button onClick={() => acceptOrder(order.OrderID)}>Accept Order</button>
                <button onClick={() => completeOrder(order.OrderID)}>Complete Order</button>
              </div>
            ))}
          </div>
        </div>

        <div className='h-1/2 border-2 border-red-400 mt-2'>
          <h1 className='text-white text-xl bg-red-500'>Orders History...</h1>
          <div className='w-full h-90% border-black border-2 overflow-y-scroll p-2'>
            <AcceptedOrder accept={true} complete={false} paid={false} />
            <AcceptedOrder accept={true} complete={true} paid={false} />
            <AcceptedOrder accept={true} complete={true} paid={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingStaffHome;


// {/* Order Processing */}
// {/* <div>
//   <div className='h-1/2 border-2 border-red-400 mt-2'>
//     <h1 className='text-white text-xl bg-gray-400'>Orders Processing...</h1>
//       <div className='w-full h-90% border-black border-2 overflow-y-scroll p-2'>
//           <OrderComp/>
//           <OrderComp/>
//           <OrderComp/>
//       </div>
//     </div>
// </div> */}