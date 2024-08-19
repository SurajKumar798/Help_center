import React, {useEffect, useState} from 'react'
import './SearchBody.css';
import axios from 'axios';

function SearchBody({onSearchResult}) {

  const [searchInput, setSearchInput]= useState('');

  useEffect( ()=> {
   const getData = async()=> {
    if(searchInput){
      try{
        const response = await axios.get(`http://localhost:4000/cardDetails/${searchInput}`)
        onSearchResult(response.data)
      }catch(err){
        console.log('data not found', err)
        onSearchResult(null);
      }
    }
   }
   getData()
  }, [searchInput, onSearchResult])
  return (
    <div className='firstBody'>
      <div className='heading'>
        <h2 className='flex justify-center pt-10 text-[4rem]'>How can we help?</h2>
      </div>
      <div className='searchbox'>
        <input 
        className='border border-gray-500 w-1/3 h-10 rounded pl-4'
        type='text' 
        placeholder='Search'
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)} />
      </div>
    </div>
  )
}

export default SearchBody;
