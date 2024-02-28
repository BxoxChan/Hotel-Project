import React, { useState, useEffect } from "react";
import OrderComp from "../../components/CookingStaff/OrderComp";
import AcceptedOrder from "../../components/CookingStaff/AcceptedOrder";
import { siteRequest } from "../../util/requestMethod";

export default function CookingStaffHome() {
  const [newOrders, setNewOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const newOrdersResponse = await siteRequest.get('orders/new');
        const orderHistoryResponse = await siteRequest.get('orders/history');
        
        if (!newOrdersResponse.data || !Array.isArray(newOrdersResponse.data) ||
            !orderHistoryResponse.data || !Array.isArray(orderHistoryResponse.data)) {
          throw new Error("Invalid data received");
        }
        
        setNewOrders(newOrdersResponse.data);
        setOrderHistory(orderHistoryResponse.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();

    const intervalId = setInterval(fetchOrders, 2000); // Fetch orders every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen overflow-y-scroll">
      <header className="text-center bg-orangeD1 font-Ubuntu text-4xl py-5 text-white">
        MEJBAN
      </header>
      <h1 className="bg-black text-white text-center text-2xl italic">
        Orders
      </h1>
      <div className="h-4/5 mt-2 mx-2">
        <div className="h-full sm:h-3/4 sm:border-none">
          <h1 className="text-white text-xl bg-orange-400 font-bold">
            Orders in Queue...
          </h1>
          <div className="h-90% w-full sm:flex overflow-x-scroll py-2 sm:border border border-gray-400 px-2 bg-yellow-50">
            {newOrders.reduce((acc, order) => {
              const existingOrderIndex = acc.findIndex(item => item.order_id === order.order_id);
              if (existingOrderIndex !== -1) {
                const existingItemIndex = acc[existingOrderIndex].item_names.findIndex(itemName => itemName === order.item_name);
                if (existingItemIndex === -1) {
                  acc[existingOrderIndex].item_names.push(order.item_name);
                }
              } else {
                acc.push({
                  ...order,
                  item_names: [order.item_name]
                });
              }
              return acc;
            }, []).reverse().map((order, index) => (
              <div className="sm:mx-2 w-full my-2 sm:my-0" key={`${order.order_id}-${index}`}>
                <OrderComp order={order} key={order.order_id} />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="h-full sm:h-3/4 sm:border-none">
          <h1 className="text-white text-xl bg-orange-400 font-bold">
            Accepted Orders
          </h1>
          <div className="h-90% w-full sm:flex overflow-x-scroll py-2 sm:border border border-gray-400 px-2 bg-yellow-50">
            {orderHistory
              .filter(order => order.status === "Accepted")
              .map((order, index) => (
                <div className="sm:mx-2 w-full my-2 sm:my-0" key={`${order.order_id}-${index}`}>
                  <AcceptedOrder order={order} key={order.order_id} />
                </div>
              ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
