import React, { useEffect } from 'react';

export default function OrderCardComp({ id, service, name, orders, phone, total, status }) {
  // useEffect(()=>{
  //   console.log('OrderCardComp:', id, service, name, orders, phone, total, status);

  // },[])
  return (
    <tr className='even:bg-gray-100 sm:h-20'>
      <td>#{id}</td>
      {/* <td>{service}</td> */}
      <td>{name}</td>
      <td className='overflow-x-scroll max-w-14 border-black border no-scrollbar'>{orders}</td>
      <td className='pl-1'>{phone ? phone : '-'}</td>
      <td>₹{total}</td>
      <td className={status === 'Accepted' ? 'text-green-500 font-bold' : ''}>{status.toUpperCase()}</td>
    </tr>
  );
}
