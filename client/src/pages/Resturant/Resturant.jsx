import React, { useState } from 'react';
import MenuComp from '../../components/MenuComp';
import SearchBar from '../../components/SearchBar';
import { NavLink } from 'react-router-dom';
import TableNO from '../../components/TableNO';

export default function Resturant() {
  const [showTable, setShowTable] = useState(false);
  const [tableDetails, setTableDetails] = useState({
    table: '',
    phone: '',
    name: '',
  });

  const handleTableDetails = () => {
    setShowTable(true);
  };

  const handleSubmit = (formData) => {
    setTableDetails(formData);
    setShowTable(false);
    // Do something with the form data
    console.log(formData);
  };

  return (
    <div className='bg-resturant bg-cover bg-no-repeat relative h-screen'>
      <header className='text-center text-black  font-Ubuntu text-3xl py-5 bg-orangeD1'>
        MEJBAN <span className='text-4xl font-bold text-black'>Restaurant</span>
      </header>
      <div className='h-85% border-2'>
        <SearchBar />
        <MenuComp />
      </div>
      {/* Place order */}
      {tableDetails.table !== '' && tableDetails.phone !== '' && tableDetails.name !== '' ? (
        <NavLink to={'/cafe/confirmOrderCafe'} className='bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center'>
          Cart
        </NavLink>
      ) : (
        <button className='bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center' onClick={handleTableDetails}>
          Select Table
        </button>
      )}
      {showTable && (
        <div className='absolute top-0 w-full h-full flex items-center justify-center backdrop-brightness-50'>
          <TableNO onSubmit={handleSubmit} setTableDetails={setTableDetails} tableDetails={tableDetails} />
        </div>
      )}
    </div>
  );
}
