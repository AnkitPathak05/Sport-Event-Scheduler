import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


//NavLink se anchor tag me class active set ho jati h jb bhi link wala page open rehta h
export default function Navbar() {

    const navlinkstyles=({isActive})=>{
        return{
            fontWeight: isActive? 'bold': 'normal',
            textDecoration: isActive? 'none':'underline',
            color: 'white'
        }
    }

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(prevState => !prevState);
        
    };

    const handleLinkClick = () => {
        setDropdownVisible(false);  
    };
    
  return (
        <nav>
        <div class="logo">
            <img src="https://www.iitbhu.ac.in/contents/iitbhu/img/footer_transparent.png" alt="IIT BHU" />
        </div>
        
        <div class="nav-items">
            <ul class="overview">
                <li><NavLink style={navlinkstyles} to='/'>Home</NavLink></li>
                <li><NavLink style={navlinkstyles} to='/upcoming'>Upcoming Events</NavLink></li>
                <li><NavLink style={navlinkstyles} to='find-events'>Find Events</NavLink></li>
                <li><NavLink style={navlinkstyles}  to='/contact'>Contact Us</NavLink></li>
            </ul>
            <a><button id="login"><NavLink style={navlinkstyles} to='/profile'>Profile</NavLink> </button></a>
            <div class="hamburger"onClick={toggleDropdown} >
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
              </div>
            <ul className='dropdown-menu' style={{ display: isDropdownVisible ? "block" : "none" }} >
                <li onClick={handleLinkClick}><NavLink style={navlinkstyles} to='/'>Home </NavLink></li>
                <li onClick={handleLinkClick}><NavLink style={navlinkstyles} to='/upcoming'>Upcoming Events</NavLink></li>
                <li  onClick={handleLinkClick}><NavLink style={navlinkstyles} to='find-events'>Find Events</NavLink></li>
                <li onClick={handleLinkClick}><NavLink style={navlinkstyles}  to='/contact'>Contact Us</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}
