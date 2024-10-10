import React, { useState } from 'react'
import './Navbar.css';
import logo from "../../assets/logo.png";

const Navbar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false)
  const toggleDropDown = () => {
    setDropdownVisible(! dropdownVisible)
  };
  return (
   <nav className='navbar'>
    <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
    </div>
    <ul>
        <li className='services' onMouseEnter={toggleDropDown} onMouseLeave={toggleDropDown}>Services {dropdownVisible && ( <ul className = "dropdown">
          <li>Services 1</li>
          <li>services 2</li>
          <li>services 3</li>
        </ul>)}</li>

        <li>about</li>
        <li>Resources</li>
        <li className='login-link'>Login</li>
        <li className='start-business'>Start your business</li>
    </ul>
    

   </nav>
  )
}

export default Navbar