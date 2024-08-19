import React from 'react'
import './Footer.css';

function Footer() {
  return (
   <>
    <div className='flex justify-around bg-black text-white pt-10 mt-20 h-64'>
      <div className='heading'>
        <div className='subheading'>Abstract</div>
        <p>Branches</p>
      </div>

      <div className='heading'>
        <div className='subheading'>Resources</div>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
      </div>

      <div className='heading'>
        <div className='subheading'>Community</div>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>

      <div className='heading'>
        <div className='subheading'>Company</div>
        <p>About Us</p>
        <p>Careers</p>
        <p>Legal</p>
      </div>

      <div className='heading'>
        <div className='subheading'>Conatct Us</div>
        <p style={{display: 'flex', gap: '8px'}}>Email:
            <a href={'sethysurajkumar@gmail.com'}>sethysurajkumar@gmail.com</a>
        </p>
      </div>
   
      <div className='copyright'>
       <p>&copy; Copyright 2024</p> 
       <p>Studio Design, Inc.</p>
       <p>All rights reserved</p>
      </div>
    </div>
   </>
   
  )
}

export default Footer
