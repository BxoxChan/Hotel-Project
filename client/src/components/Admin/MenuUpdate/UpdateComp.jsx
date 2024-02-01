import React, { useState } from 'react'

export default function UpdateComp() {
      //const [selectedOptions, setSelectedOptions] = useState([]);
    const [form,setForm]=useState({
        image:null,
        name:'',
        price:'',
        services:[],
    });


   const handleInputChange = (e) => {
    const { name, value, type, checked ,files} = e.target;

    if (type === 'checkbox') {
      // If it's a checkbox, handle multiple selections
      const updatedService = checked
        ? [...form.services, value]
        : form.services.filter(service => service !== value);

      setForm({ ...form, services: updatedService });
    } else if(type === 'file'){
         setForm({ ...form, [name]: files[0] });

    }else{
      // For other input types, update the corresponding property in formData
      setForm({ ...form, [name]: value });
    }
  };

    const OnSubmit=(e)=>{
     e.preventDefault();
     console.log(form);
    }

    // const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  //};

  return (
    <div className='bg-white w-4/5 h-4/5 rounded-md drop-shadow-md p-2'>
          <h1 className='text-xl font-Raleway underline'>Add a new Dish</h1>
          <form className='h-4/5 border-2 w-full flex'>

            <div className='flex-1  flex flex-col items-center justify-evenly'>
            
            <input type="file" 
            title='image' name="image"
             className='w-1/2 border'
             accept="image/*"
              onChange={handleInputChange}/>

             <div className=' w-1/2 flex justify-center gap-2'>
            <label>Name</label>
            <input type='input' placeholder='Name of dish' className='border' name='name' onChange={handleInputChange}/>
             </div>
             
             <div className=' w-1/2 flex justify-center gap-3'>
            <label htmlFor="">Price</label>
            <input type="text" placeholder='price' className=' border' name='price' onChange={handleInputChange}/>
             </div>

             </div>

            {/* Right       */}

            <div className='flex-1 '>
            <div className='bg-gray-300  flex justify-around items-center mt-5 w-4/5 mx-auto'>
            <span>
            <label htmlFor="" className='pr-2' >Cafe</label>
            <input 
            type="checkbox"
             value='cafe'
             onChange={handleInputChange}
             checked={form.services.includes('cafe')}
             />

            </span>

            <span>
            <label htmlFor="" className='pr-2'>Resturant</label>
            <input
             type="checkbox"
              value='Resturant'
             onChange={handleInputChange}
             checked={form.services.includes('Resturant')}
              />

            </span>

            <span>
            <label htmlFor="" className='pr-2'>Hotel</label>
            <input type="checkbox" value='Hotel'
            onChange={ handleInputChange}
             checked={form.services.includes('Hotel')}

            />
            </span>
             </div>


             {/* button */}
             <div className='flex justify-center pt-5'>
             <button className='bg-orangeD1 p-2 px-5 rounded-md hover:bg-orange-600' onClick={OnSubmit}>Add</button>
             </div>
                          </div>

          </form>
    </div>
  )
}
