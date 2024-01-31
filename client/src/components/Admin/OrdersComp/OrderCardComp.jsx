import React from 'react'

export default function OrderCardComp({id,serv,customer,order,phone,total,status}) {
  return (
        <tr className='even:bg-gray-100 sm:h-20'>
        <td >#{id}</td>
        <td>{serv}</td>
        <td>{customer}</td>
        <td className='overflow-x-scroll max-w-14 border-black border no-scrollbar ' >{order}</td>
        {phone?<td className='pl-1'>{phone}</td>:<td className='pl-5'>-</td>}
        <td>₹{total}</td>
        {status=="paid"?<td className="text-red-500 font-bold">{status.toUpperCase()}</td>:<td className=''>-</td>}
    </tr>
  )
}
