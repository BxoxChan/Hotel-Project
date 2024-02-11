import { Button } from '@mui/material';
import React from 'react';

export default function DishCard({ menuItem, addToCart }) {
  const handleAddToCart = () => {
    addToCart(menuItem);
  };

  return (
    <div key={menuItem.item_id} className='flex py-2 my-1'>
      <div className='w-1/3 border-2 border-white flex justify-center items-center border-r-0 bg-white rounded-l-md'>
        <img src={menuItem.image} alt="dish" className='w-full h-full' />
      </div>
      <div className='w-2/3 border-2 border-white bg-white text-gray-500 pl-2 rounded-r-md'>
        <div className='font-bold text-3xl font-Montserrat'>{menuItem.name}</div>
        <div className='font-bold text-green-500'>₹{menuItem.price}</div>
        {/* Example of displaying service types */}
        {menuItem.service_type_id && Array.isArray(menuItem.service_type_id) && menuItem.service_type_id.join(', ')}
        <div className='flex justify-start'>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
}
