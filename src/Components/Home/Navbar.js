import React from 'react'
import './Navbar.css'
import Logo from '../../Assests/Logo.png'
export default function 
() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={Logo} alt="" className='company-logo'/>
            <h4>cofféé</h4>
        </div>
        <div className='navbar-middle'>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <input 
            type="search" 
            name=""
            className='search-box'
            placeholder='Search' />
            <button className='search-button'>Search</button>
        </div>
    </div>
  )
}
