import { NavLink } from "react-router-dom";
import MenuComp from "../components/MenuComp";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import TableNO from "../components/TableNO";
//import bg from "../../public/cafeBG.jpg"


export default function Cafe() {
  const [showTable,setshowTable]=useState(false);

  const [tableDetails, setTableDetails] = useState({
    table: '',
    phone: '',
    name: '',
  });


  // const [tableDetails,setTableDetails]=useState(
  //    {
  //    table:'',
  //    phone:'',
  //    name:''
  //  }
  // )
  
  // const [userDetails,setUserDetails] = useState({
  //   name:'',
  //   phone:'',
  //   table:'',
  // })
  // const [tableNo,setTableNo]=useState('');
  // const [phone,setPhone]=useState('');
  // const [name,setName]=useState('');
// const [tableDetails,setTableDetails]=useState(
//      {
//      table:tableNo,
//      phone:phone,
//      name:name
//    }
//   )
  

  const handleTableDetails=()=>{
    setshowTable(true);
  }


  // const confirmDetails = ()=>{
  //   // console.log(name);
  //   // console.log(tableNo);
  //   // console.log(phone);
  //   setshowTable(false);
  //   // console.log(name);
  //   // console.log(tableNo);
  //   // console.log(phone);
  // //   setTableDetails({
  // //    table:tableNo,
  // //    phone:phone,
  // //    name:name
  // //  })
  //   console.log(tableDetails);
  //   // console.log(name);
  //   // console.log(tableNo);
  //   // console.log(phone);
  // }

  const handleSubmit = (formData) => {
        setshowTable(false);
        setTableDetails(formData);
    // Do something with the form data
    console.log(tableDetails);
  };

  return (
    <div className="bg-jails h-screen bg-opacity bg-center bg-no-repeat bg-cover relative ">
        <header className='text-center bg-black  font-Ubuntu text-3xl py-5 text-orangeD1'>MEJBAN <span className="text-white text-4xl font-bold ">Jail</span> <span className='text-4xl font-bold text-orangeD1'>Cafe</span></header>
        <div className=" h-85% ">
          <SearchBar/>
        <MenuComp/>
        </div>
        {/* place order */}
         {
          (tableDetails.table !='' && tableDetails.phone !='' && tableDetails.name !='')?
            <NavLink  to={"/cafe/cart"} className ="bg-orange-500 text-white w-full absolute bottom-5 py-2 text-2xl text-center">Cart</NavLink>
          :
          <div className='absolute bottom-5 w-full flex justify-center '>
          <button className='bg-orange-500 text-white w-4/5  py-2 text-2xl rounded-md' onClick={handleTableDetails}>
          Select Table
        </button>
        </div>
          //<button className="bg-orange-500 text-white w-full absolute bottom-0 py-2 text-2xl text-center" onClick={handleTableDetails}>Select Table</button>
         }


         {
          showTable && 
          <div className="absolute top-0 w-full  border-2 border-orangeD1 h-full flex items-center justify-center backdrop-brightness-50">
            <TableNO onSubmit={handleSubmit}   setTableDetails={setTableDetails} tableDetails={tableDetails}/>
          </div>
          
         }
    </div>
  )
}
