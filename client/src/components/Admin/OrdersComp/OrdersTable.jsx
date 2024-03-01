import React from 'react';
import OrderCardComp from './OrderCardComp';

export default function OrdersTable({ comp, orderData }) {
  return (
    <>
      {/* Default Comp is  Cafe*/}
      <table className='sm:w-full h-full sm:table-fixed'>
        <thead className='border-black font-semibold table-fixed text-left bg-orangeD1 sticky top-0'>
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
          {orderData && Array.isArray(orderData) && orderData.length > 0 && orderData
            .filter((order) => order.serv === comp)
            .map((order) => (
              <OrderCardComp
                key={order.id} // Ensure you provide a unique key for each order
                id={order.id}
                serv={order.serv}
                order={order.order}
                customer={order.customer}
                phone={order.phone}
                total={order.total}
                status={order.status}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
