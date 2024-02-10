import React, { useState, useEffect } from 'react';

export default function DishCard() {
  const [menuItems, setMenuItems] = useState([]); // State to store menu items
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Define the function to fetch all menu items
    const fetchMenuItems = async () => {
      try {
        // Make a GET request to fetch all menu items
        const response = await fetch('http://localhost:3000/menu'); // Endpoint to fetch all menu items
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        setMenuItems(data); // Set the fetched menu items to the state
      } catch (error) {
        setError(error.message); // Handle errors
      }
    };

    // Call the fetchMenuItems function when the component mounts
    fetchMenuItems();
  }, []); // Empty dependency array ensures the effect runs only once

  // Render loading state while fetching
  if (menuItems.length === 0 && !error) {
    return <div>Loading...</div>;
  }

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render dish cards for each menu item
  return (
    <div>
      {menuItems.map((menuItem) => (
        <div key={menuItem.id} className='flex py-2 my-1'>
          <div className='w-1/3 border-2 border-white flex justify-center items-center border-r-0 bg-white rounded-l-md'>
            <img src={menuItem.image} alt="dish" className='w-full h-full' />
          </div>
          <div className='w-2/3 border-2 border-white bg-white text-gray-500 pl-2 rounded-r-md'>
            <div className='font-bold text-3xl font-Montserrat'>{menuItem.name}</div>
            <div className='font-bold text-green-500'>₹{menuItem.price}</div>
            {/* Example of displaying service types */}
            {menuItem.serviceTypes && Array.isArray(menuItem.serviceTypes) && menuItem.serviceTypes.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
}
