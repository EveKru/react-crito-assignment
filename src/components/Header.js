import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/images/logotype.svg'

const Header = () => {
  return (
    <header>
      <div className='container'>
       <Link to="/"><img className="logotype" src={Logo} alt="" /></Link>
        <div class ="menu">
          <div class="topp-menu">
            <div class="contact-information"> 
              <div class="content-box">
                <i class="fa-solid fa-phone"></i>
                +46 (8) 121 470 50
              </div>
              <div class="content-box">
                <i class="fa-regular fa-envelope"></i>
                info@crito.com
              </div>
              <div class="content-box last" >
                <i class="fa-solid fa-location-dot"></i>
                Sveavägen 31,111 34 STOCKHOLM
              </div>
            </div>
            <div class="social-media">
              <a href="http://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
              <a href="http://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
              <a href="http://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a href="http://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div class="main-menu">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </nav>
            <a class="btn-yellow" href="login.html">Login<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header