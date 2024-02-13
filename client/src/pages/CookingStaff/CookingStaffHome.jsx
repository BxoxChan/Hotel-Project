import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderComp from "../../components/CookingStaff/OrderComp";

export default function CookingStaffHome() {
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    fetchNewOrders();
  }, []);

  const fetchNewOrders = async () => {
    const url = "http://localhost:3000/orders/new";
    console.log("Fetching new orders from:", url);
    try {
      const response = await axios.get(url);
      console.log("Response data:", response.data);
      if (!response.data || !Array.isArray(response.data)) {
        throw new Error("Invalid data received");
      }
      setNewOrders(response.data);
    } catch (error) {
      console.error("Error fetching new orders:", error);
    }
  };

  return (
    <div className="h-screen overflow-y-scroll">
      <header className="text-center bg-orangeD1 font-Ubuntu text-4xl py-5 text-white">
        MEJBAN
      </header>
      <h1 className="bg-black text-white text-center text-2xl italic">
        Orders
      </h1>
      <div className="h-4/5 mt-2 mx-2">
        <div className="h-1/2 border-2 border-red-400">
          <h1 className="text-white text-xl bg-orange-400 font-bold">
            Orders in Queue...
          </h1>
          <div className="h-90% w-full flex overflow-x-scroll snap-x py-2">
          {newOrders.reduce((acc, order) => {
  // Find the index of the order with the same order_id
  const existingOrderIndex = acc.findIndex(item => item.order_id === order.order_id);

  // If the order with the same order_id exists
  if (existingOrderIndex !== -1) {
    // Check if the item_name already exists in the item_names array
    const existingItemIndex = acc[existingOrderIndex].item_names.findIndex(itemName => itemName === order.item_name);
    
    if (existingItemIndex === -1) {
      // Add the item_name to the item_names array
      acc[existingOrderIndex].item_names.push(order.item_name);
    }
  } else {
    // Create a new order object
    acc.push({
      ...order,
      item_names: [order.item_name] // Create an array with the item_name
    });
  }
  return acc;
}, []).map((order, index) => (
  <div className="w-1/2 mx-1" key={`${order.order_id}-${index}`}>
    <OrderComp order={order} key={order.order_id} />
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  );
}

//         {/* Order History */}
//         {/* <div className='h-1/2 border-2 border-red-400 mt-2'>
//           <h1 className='text-white text-xl bg-red-500'>Orders History...</h1>
//           <div className='w-full h-90% border-black border-2 overflow-y-scroll p-2'>
//             <AcceptedOrder accept={true} complete={false} paid={false}/>
//             <AcceptedOrder accept={true} complete={true} paid={false}/>
//             <AcceptedOrder accept={true} complete={true} paid={true}/>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

{
  /* Order Processing */
}
{
  /* <div>
  <div className='h-1/2 border-2 border-red-400 mt-2'>
    <h1 className='text-white text-xl bg-gray-400'>Orders Processing...</h1>
      <div className='w-full h-90% border-black border-2 overflow-y-scroll p-2'>
          <OrderComp/>
          <OrderComp/>
          <OrderComp/>
      </div>
    </div>
</div> */
}
