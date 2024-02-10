import React from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export default function CafeConfirm() {
  return (
    <div className='bg-cover h-screen relative'>
        <header className='text-center bg-orangeD1 text-white font-Ubuntu text-3xl py-5'>MEJBAN <span className='text-4xl font-bold text-black'>Empire</span></header>
         
         <header className='font-bold text-black text-2xl text-center'>Your Orders</header>
         <div className='border-2 border-black mt-5 mx-2 h-3/5 overflow-y-scroll rounded-sm'>


            {/* Customer Details */}

          <div className=' px-1'>
              <h1 className='text-center font-bold'>Customer Details</h1> 
             <div className='flex justify-between' >
               <label className='font-bold' htmlFor="">Service:</label>
               <span>#{"Cafe"}</span>
             </div>
             <div className='flex justify-between' >
               <label className='font-bold' htmlFor="">Name:</label>
               <span>#{"Bhaskar"}</span>
             </div>
             <div className='flex justify-between' >
              <label className='font-bold' htmlFor="">Ph.no</label>
              <span>#{3628278172}</span>
             </div>

             <div className='flex justify-between' >
              <label className='font-bold' htmlFor="">Table No.</label>
              <span>#{"C-2"}</span>
             </div>
            </div>

            <hr className='bg-black'/>


           <div className='flex justify-around my-2 text-xl font-bold '>
            <div>Items</div>
            <div>Quantity</div>
           </div>

          {/* dish */}

           <div className='flex justify-around border-red-500 border py-2' >
            <div className='flex-1 flex items-center font-bold text-3xl '>chicken</div>
            <div className='flex-1 flex flex-col justify-center items-center'>
            <span className='flex'><button className='bg-red-500 mr-5 rounded-sm'><RemoveRoundedIcon/></button><span className='border border-black px-2 text-3xl'>1</span><button className='bg-green-400 ml-5 rounded-sm'><AddRoundedIcon/></button></span>
            <span className='font-bold'>₹200</span>
            </div>
           </div>
           <div className='flex justify-around border-red-500 border py-2' >
            <div className='flex-1 flex items-center font-bold text-3xl'>Rice</div>
            <div className='flex-1 flex flex-col justify-center items-center'>
            <span className='flex'><button className='bg-red-500 mr-5 rounded-sm'><RemoveRoundedIcon/></button><span className='border border-black px-2 text-3xl'>1</span><button className='bg-green-400 ml-5 rounded-sm'><AddRoundedIcon/></button></span>
            <span className='font-bold'>₹200</span>
            </div>
           </div>
           <div className='flex justify-around border-red-500 border py-2' >
            <div className='flex-1 flex items-center font-bold text-3xl'>Chapati</div>
            <div className='flex-1 flex flex-col justify-center items-center'>
            <span className='flex'><button className='bg-red-500 mr-5 rounded-sm'><RemoveRoundedIcon/></button><span className='border border-black px-2 text-3xl'>1</span><button className='bg-green-400 ml-5 rounded-sm'><AddRoundedIcon/></button></span>
            <span className='font-bold'>₹200</span>
            </div>
           </div>
           <div className='flex justify-around border-red-500 border py-2' >
            <div className='flex-1 flex items-center font-bold text-3xl'>Chapati</div>
            <div className='flex-1 flex flex-col justify-center items-center'>
            <span className='flex'><button className='bg-red-500 mr-5 rounded-sm'><RemoveRoundedIcon/></button><span className='border border-black px-2 text-3xl'>1</span><button className='bg-green-400 ml-5 rounded-sm'><AddRoundedIcon/></button></span>
            <span className='font-bold'>₹200</span>
            </div>
           </div>
           <div className='flex justify-around border-red-500 border py-2' >
            <div className='flex-1 flex items-center font-bold text-3xl'>Chapati</div>
            <div className='flex-1 flex flex-col justify-center items-center'>
            <span className='flex'><button className='bg-red-500 mr-5 rounded-sm'><RemoveRoundedIcon/></button><span className='border border-black px-2 text-3xl'>1</span><button className='bg-green-400 ml-5 rounded-sm'><AddRoundedIcon/></button></span>
            <span className='font-bold'>₹200</span>
            </div>
           </div>
           <div className='flex justify-around border-red-500 border py-2' >
            <div className='flex-1 flex items-center font-bold text-3xl'>Chapati</div>
            <div className='flex-1 flex flex-col justify-center items-center'>
            <span className='flex'><button className='bg-red-500 mr-5 rounded-sm'><RemoveRoundedIcon/></button><span className='border border-black px-2 text-3xl'>1</span><button className='bg-green-400 ml-5 rounded-sm'><AddRoundedIcon/></button></span>
            <span className='font-bold'>₹200</span>
            </div>
           </div>

           {/* addition */}

           <div className='flex flex-col  justify-center'>
           <h1 className='font-bold pl-2'>Addtions</h1>
           <textarea name='addOns' cols="40" rows="4" className='border m-2' placeholder='1.Extra butter...'/>
           </div>



           {/* total */}

           <div className='w-full  border-black border flex justify-between px-2'>
            <div>Total</div>
            <div>₹600 +{"(Add)"}</div>
           </div>
           
            {/* <div>
                <header className='text-2xl'>items</header>
                <ol className='border mt-4'>
                   <li>chicken</li>
                   <li>pepsi</li>
                </ol>
            </div>
            <div>
                <header className='text-2xl'>quantity</header>
                <ol className='border mt-4'>
                   <li>chicken</li>
                   <li>pepsi</li>
                </ol>
            </div> */}

                    {/* <NavLink to={"/cafe/confirmOrderCafe"} className ="bg-orange-500 text-white w-full  absolute bottom-0 py-2 text-2xl text-center">Cart</NavLink> */}

            
         </div>
            <button className ="bg-orange-500 text-white w-full py-2 text-2xl mt-5 absolute bottom-0">Place Order{"(₹660)"}</button>
    </div>
  )
}
