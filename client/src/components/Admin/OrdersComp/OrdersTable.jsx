import React, { useEffect, useState } from 'react';
import { siteRequest } from '../../../util/requestMethod';
import OrderCardComp from './OrderCardComp';

export default function OrdersTable({ comp }) {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    // Fetch order data from the backend API
    siteRequest.get('/orders/accepted')
      .then(response => {
        setOrderData(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching order history:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      {/* Default Comp is Cafe*/}
      <table className='sm:w-full h-full sm:table-fixed'>
        <thead className='border-black font-semibold table-fixed text-left bg-orangeD1 sticky top-0'>
          <tr>
            <th>Service ID</th>
            <th>Name</th>
            <th>Orders</th>
            <th>Mobile</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orderData && Array.isArray(orderData) && orderData.length > 0 && orderData
            .filter(order => order.serv === comp)
            .map(order => (
              <OrderCardComp
                key={order.id}
                id={order.order_id}
                service={order.order.service_type_id}
                orders={order.order.item_name}
                name={order.order.customer_name}
                phone={order.order.customer_phone_number}
                total={order.order.total_cost}
                status={order.order.status}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
