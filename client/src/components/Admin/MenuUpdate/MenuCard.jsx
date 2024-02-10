import React, { useState } from 'react'
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import PriceUpdate from './PriceUpdate';

export default function MenuCard({image,dish,price,servicesIn,status}) {
  const [priceWindow,setpriceWindow]=useState(false);

  function Priceupdate(){
   setpriceWindow(true);
  }

    // let statusAlt=status;
    //  function toggleStatus(status){
    //    statusAlt=!status;
    //    console.log(statusAlt);
    //    return statusAlt;
    //  }
    //const status=true;
  return (
        <tr className='even:bg-gray-100 sm:h-40'>
        <td >{image}</td>
        <td>{dish}</td>
        <td>{price}</td>
        <td>{servicesIn.map((p)=>p+" | ")}</td>
        <td className={status?`text-green-400 font-bold`:`text-red-500 font-bold`}>{status?"In-Stock":"Out of Stock"}</td>
        <td><button className={!status?`bg-green-400 font-bold text-white p-3 w-1/2`:`bg-red-500 font-bold text-white p-3 w-1/2`}>{status?"Out-of-Stock":"In-Stock"}</button></td>
        <td><button onClick={Priceupdate}>{priceWindow===false?<PriceChangeIcon/>:<PriceUpdate/>}</button></td>
       </tr>
    
  )
}
