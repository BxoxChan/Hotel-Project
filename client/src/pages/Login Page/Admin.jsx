import React, { useState } from 'react'

export default function Admin() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's consider a basic check
    if (username === 'user' && password === 'password') {
      // Successful login
      // You can redirect to another page or set authentication state
      
    } else {
      // Failed login
      alert('Invalid credentials');
    }
  };
  return (
    <div className='h-screen bg-Cust1'>
        <header className='text-orangeD1 text-3xl font-bold bg-black text-center py-5 '>Mejban Empire</header>

          <div className='w-full sm:w-2/5 mx-auto flex flex-col justify-center  border-black h-4/5 '>
            <h1 className='font-Ubuntu text-4xl text-center my-2 text-orangeD1'>Admin Login</h1>
            <form className='border mx-auto py-5 w-4/5 sm:w-3/5 flex flex-col items-start px-2 rounded-sm bg-white'>
        <label className='font-bold'>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border rounded-md pl-2 ml-1'
          />
        </label >
        <br />
        <label className='font-bold '>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             className='border rounded-md pl-2 ml-1'
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} className='bg-orangeD1 text-white font-bold p-2 rounded-md w-1/4 '>
          Login
        </button>
      </form>
          </div>
    </div>
  )
}
