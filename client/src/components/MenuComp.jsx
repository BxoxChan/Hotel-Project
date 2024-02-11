import React, { useState, useEffect } from 'react';
import DishCard from './DishCard';
import axios from 'axios';
import { menuRequest } from '../util/requestMethod';

export default function MenuComp() {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await menuRequest.get('/');
        setMenuItems(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMenuItems();
  }, []);

  const addToCart = (menuItem) => {
    setCartItems([...cartItems, menuItem]);
    console.log('Item added to cart:', menuItem);
  };
  
  if (menuItems.length === 0 && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='h-3/4 border border-black mx-2 p-2 overflow-y-scroll backdrop-brightness-75 backdrop-blur-sm'>
      {menuItems.map((menuItem) => (
        <DishCard key={menuItem.item_id} menuItem={menuItem} addToCart={addToCart} />
      ))}
    </div>
  );
}
