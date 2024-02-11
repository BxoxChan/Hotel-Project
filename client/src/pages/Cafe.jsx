import { NavLink } from "react-router-dom";
import MenuComp from "../components/MenuComp";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function Cafe() {
  return (
    <div className="bg-jails h-screen bg-opacity bg-center bg-no-repeat bg-cover relative">
      <header className='text-center bg-black font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN <span className="text-white text-4xl font-bold ">Jail</span> <span className='text-4xl font-bold text-orangeD1'>Cafe</span></header>
      <div className="h-85%">
        <SearchBar />
        <MenuComp />
      </div>
      {/* place order */}
      <div className='absolute bottom-5 w-full flex justify-center '>
        <NavLink to="/cafe/cart" className='bg-orange-500 text-white w-4/5 py-2 text-2xl rounded-md text-center'>
          Cart
        </NavLink>
      </div>
    </div>
  );
}
