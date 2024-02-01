import React from 'react'

export default function HotelServiceCard({service,status}) {
    const changeHotelService=(e)=>{
        e.preventDefault();
        window.alert('Do you realy want to Change Hotel Service')
        console.log('changed');
    }
  return (
    <tr className='even:bg-gray-100 sm:h-40 text-center'>
        <td>{service}</td>
        {/* <td className=''>{status?"Available":"Not-Available"}</td> */}
         <td className={status?`text-green-400 font-bold`:`text-red-500 font-bold`}>{status?"Available":"Not-Available"}</td>
        {
            <td>
            <button onClick={changeHotelService} className={status?`bg-red-500 text-white p-1 rounded-lg font-bold`:`bg-green-400 text-white p-1 rounded-lg font-bold`}>{status?"Not-Available":"Available"}</button>
            </td>
            }
    </tr>
  )
}
