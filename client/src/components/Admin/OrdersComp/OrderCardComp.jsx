import React from 'react';

export default function OrderCardComp({ id, service, name, orders, phone, total, status }) {
  console.log('OrderCardComp:', id, service, name, orders, phone, total, status);

  return (
    <tr className='even:bg-gray-100 sm:h-20'>
      <td>#{id}</td>
      <td>{service}</td>
      <td>{name}</td>
      <td className='overflow-x-scroll max-w-14 border-black border no-scrollbar'>{orders}</td>
      <td className='pl-1'>{phone ? phone : '-'}</td>
      <td>₹{total}</td>
      <td className={status === 'paid' ? 'text-red-500 font-bold' : ''}>{status.toUpperCase()}</td>
    </tr>
  );
}
