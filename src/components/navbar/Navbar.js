import React from 'react'
import {
  useWindowWidth,
} from '@react-hook/window-size'
import logo from "../../images/scdclogo.png"
import "./Navbar.css"
import Smallnav from './Smallnav';
function Navbar() {
  const width=useWindowWidth();
  return (


    <div className='navbar'>
      <div className='left_nav'>
        <img src={logo} className="logo_nav"/>
      </div>
      {width>=973&&
      <div className='right_nav'>
        <div className='right_nav_ele'>
         <a href="#services" className='link_it'>
         Services</a> 
        </div>
        <div className='right_nav_ele'>
        <a href="#portfolio" className='link_it'>
         Portfolio</a> 
        </div>
        <div className='right_nav_ele'>
        <a href="#test" className='link_it'>
         Testimonials</a> 
        </div>
        <div className='right_nav_ele'>
        <a href="#about" className='link_it'>
         About</a> 
        </div>
        <div className='right_nav_btn'>

        <a href="https://form.123formbuilder.com/6257688/form" target={"_blank"} className='link_it_white'>Contact us</a>
        </div>

      </div>}
      {
        width<973&&<Smallnav/>
      }
    </div>

  )

}

export default Navbar