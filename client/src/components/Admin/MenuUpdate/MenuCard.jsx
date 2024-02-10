import React from 'react';

export default function MenuCard({ image, dish, price, servicesIn, status }) {
  return (
    <tr className='even:bg-gray-100 sm:h-40'>
      <td>{image}</td>
      <td>{dish}</td>
      <td>{price}</td>
      <td>{servicesIn.map((p) => p + " | ")}</td>
      <td className={status ? `text-green-400 font-bold` : `text-red-500 font-bold`}>
        {status ? "In-Stock" : "Out of Stock"}
      </td>
      <td>
        <button className={!status ? `bg-green-400 font-bold text-white p-3 w-1/2` : `bg-red-500 font-bold text-white p-3 w-1/2`}>
          {status ? "Out-of-Stock" : "In-Stock"}
        </button>
      </td>
    </tr>
  );
}
