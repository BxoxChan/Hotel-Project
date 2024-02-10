import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import MenuComp from "../../components/MenuComp"; // Import MenuComp component
import SearchBar from "../../components/SearchBar";
import TableNO from "../../components/TableNO";

export default function OrderFood() {
  const address=useLocation();
  const hotel=address.pathname.split("/")[1];
  const [showTable, setShowTable] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    table: '',
    phone: '',
    name: '',
  });

  useEffect(()=>{
  console.log(hotel);
  },[])

  const handleSubmit = (formData) => {
    setTableDetails(formData); // Update table details
    setShowTable(false); // Hide the table form
    console.log(tableDetails);
  };

  const handleTableDetails = () => {
    setShowTable(true); // Show the table form
  };

  return (
    <div className="h-screen relative">
      <header className='text-center bg-black font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN <span className="text-white text-4xl font-bold">Hotel</span></header>
      <div className="h-85%">
        <SearchBar />
        <MenuComp /> {/* Include the MenuComp component */}
      </div>

      {/* Display the "Cart" button if table details are filled, otherwise display "Select Table" button */}
      {tableDetails.table !== '' && tableDetails.phone !== '' && tableDetails.name !== '' ? (
        <NavLink to={"/cafe/cart"} className="bg-orange-500 text-white w-full absolute bottom-5 py-2 text-2xl text-center">Cart</NavLink>
      ) : (
         <div className='absolute bottom-5 w-full flex justify-center '>
          <button className='bg-orange-500 text-white w-4/5  py-2 text-2xl rounded-md' onClick={handleTableDetails}>
          Select Table
        </button>
        </div>


       // <button className="bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center" onClick={handleTableDetails}>Select Table</button>
      )}

      {/* Render TableNO component as a popup when showTable is true */}
      {showTable && (
        <div className="absolute top-0 w-full h-full flex items-center justify-center backdrop-brightness-50">
          <TableNO onSubmit={handleSubmit} setTableDetails={setTableDetails} tableDetails={tableDetails} hotel={hotel}/>
        </div>
      )}
    </div>
  );
}
