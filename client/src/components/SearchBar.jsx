import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
export default function SearchBar() {
  return (
    <div className="w-full  flex justify-center py-4">
        <div className='border border-black bg-white rounded-md p-2'>
          <SearchRoundedIcon className='text-orangeD1'/>
          <input type="text"  className=" border-none outline-none"/>
        </div>
    </div>
  )
}
