import React, { useState, useEffect } from 'react';
import DishCard from './DishCard';
import axios from 'axios';

export default function MenuComp() {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/menu');
        setMenuItems(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMenuItems();
  }, []);

  // Handle loading state
  if (menuItems.length === 0 && !error) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render DishCard components
  return (
    <div className='h-90% border border-black mx-2 p-2 overflow-y-scroll backdrop-brightness-75 backdrop-blur-sm'>
      {menuItems.map((menuItem) => (
  <DishCard key={menuItem.item_id} menuItem={menuItem} />
))}

    </div>
  );
}
