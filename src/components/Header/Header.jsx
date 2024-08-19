import React from 'react'


function Header() {
  return (
    <div className=''>
     
        <header className='flex justify-around items-center bg-black text-white h-16'>
          <h4>Abstract | Help Center</h4>
          <div className=''>
            <button className='border border-gray-300 w-48 h-10 rounded bg-gray-900'>Submit a request</button>
          </div>
        </header>
    </div>
  )
}

export default Header
