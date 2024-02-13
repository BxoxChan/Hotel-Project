import React, { useContext, useEffect, useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Cart } from '../context/OrderContext';

export default function CafeConfirm() {

// new Using Context
  const {cart,setCart,order,setOrder,table}=useContext(Cart);

  const [cartItems, setCartItems] = useState([]);

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
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      // total += item.price * item.quantity;
       total += Number(item.price) ;
    });
    return total;
  };

  const handleSubmit=()=>{
    //console.log(order);
    console.log(order);
  }

  return (
    <div className='bg-cover h-screen relative'>
      {/* Your existing code... */}

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
          <div>₹{calculateTotal()}</div>
        </div>
      </div>
      <button className="bg-orange-500 text-white w-full py-2 text-2xl mt-5 absolute bottom-0" onClick={handleSubmit}>Place Order (₹{calculateTotal()})</button>
    </div>
  );
}
