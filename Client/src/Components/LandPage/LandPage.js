import React from 'react';
import "../styles/landing.css"

import { Link, useNavigate } from 'react-router-dom';

 
export default function LandingPage() {
 const navigate = useNavigate()
 

  return <div className='landing'>
    <div className='image-container'>
      <img src='/insta.jpg' alt='Insta Image'/>
      
    </div>
   <button className='btn' onClick={()=>navigate('postview')}>Enter</button>
    
    
  </div>
}
