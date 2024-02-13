import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import axios from 'axios';
import { Cart } from '../context/OrderContext';

export default function CafeConfirm() {
  const { cart, setCart, order, setOrder, table } = useContext(Cart);
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0); // State for total cost
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate total cost whenever cart items change
    let total = 0;
    cart.forEach((item) => {
      total += Number(item.price);
    });
    setTotalCost(total);
  }, [cart]);

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity - 1);
    setCartItems(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  
  const handleSubmit = () => {
    console.log(order);
    const serviceIdMap = {
      'hotel': 1,
      'cafe': 2,
      'resturant': 3
    };
  
    const selectedService = table.service; 
    const serviceTypeId = serviceIdMap[selectedService.toLowerCase()]; 
  
    const orderData = {
      customer_name: order.table.table.name,
      customer_phone_number: order.table.table.phone,
      total_cost: totalCost,
      table_or_room_number: order.table.table.table,
      service_type_id: serviceTypeId,
      items: cart.map(item => ({
        item_id: item.item_id, 
        item_name: item.name
      }))
    };
  
  
    axios.post('https://mejbanempire2.onrender.com/orders', orderData)
      .then(response => {
        console.log('Order placed successfully:', response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('Error placing order:', error);
     
      });
  };
  


  return (
    <div className='bg-cover h-screen relative'>
          <div className='border-2 border-black mt-5 mx-2 h-3/5 overflow-y-scroll rounded-sm'>
        <hr className='bg-black' />
        <div className='flex justify-around my-2 text-xl font-bold '>
          <div>Items</div>
          <div>Quantity</div>
        </div>

        {/* Render cart items */}
        {cart.map((item, index) => (
          <div key={index} className='flex justify-around border-red-500 border py-2'>
            <div className='flex-1 flex items-center font-bold text-3xl'>{item.name}</div>
            <div className='flex-1 flex flex-col justify-center items-center'>
              <span className='flex'>
                <button className='bg-red-500 mr-5 rounded-sm' onClick={() => decreaseQuantity(index)}>
                  <RemoveRoundedIcon />
                </button>
                <span className='border border-black px-2 text-3xl'>{item.quantity}</span>
                <button className='bg-green-400 ml-5 rounded-sm' onClick={() => increaseQuantity(index)}>
                  <AddRoundedIcon />
                </button>
              </span>
              <span className='font-bold'>₹{item.price}</span>
            </div>
            <button className='bg-gray-500 text-white px-2 rounded-md' onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}

        {/* Total */}
        <div className='w-full border-black border flex justify-between px-2'>
          <div>Total</div>
          <div>₹{totalCost}</div>
        </div>
      </div>
      <button className="bg-orange-500 text-white w-full py-2 text-2xl mt-5 absolute bottom-0" onClick={handleSubmit}>Place Order (₹{totalCost})</button>
    </div>
  );
}
