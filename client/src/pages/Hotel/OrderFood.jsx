import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuComp from "../../components/MenuComp"; // Import MenuComp component
import SearchBar from "../../components/SearchBar";
import TableNO from "../../components/TableNO";

export default function OrderFood() {
  const [showTable, setShowTable] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    table: '',
    phone: '',
    name: '',
  });

  const handleSubmit = (formData) => {
    setTableDetails(formData); // Update table details
    setShowTable(false); // Hide the table form
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
        <NavLink to={"/cafe/cart"} className="bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center">Cart</NavLink>
      ) : (
        <button className="bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center" onClick={handleTableDetails}>Select Table</button>
      )}

      {/* Render TableNO component as a popup when showTable is true */}
      {showTable && (
        <div className="absolute top-0 w-full h-full flex items-center justify-center backdrop-brightness-50">
          <TableNO onSubmit={handleSubmit} setTableDetails={setTableDetails} tableDetails={tableDetails} />
        </div>
      )}
    </div>
  );
}
