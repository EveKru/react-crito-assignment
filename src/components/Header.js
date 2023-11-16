import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/images/logotype.svg'

const Header = () => {
  return (
    <header>
      <div className='container'>
       <Link to="/"><img className="logotype" src={Logo} alt="" /></Link>
        <div className ="menu">
          <div className="topp-menu">
            <div className="contact-information"> 
              <div className="content-box">
                <i className="fa-solid fa-phone"></i>
                +46 (8) 121 470 50
              </div>
              <div className="content-box">
                <i className="fa-regular fa-envelope"></i>
                info@crito.com
              </div>
              <div className="content-box last" >
                <i className="fa-solid fa-location-dot"></i>
                Sveavägen 31,111 34 STOCKHOLM
              </div>
            </div>
            <div className="social-media">
              <a href="http://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="http://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              <a href="http://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="http://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="main-menu">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </nav>
            <a className="btn-yellow" href="login.html">Login<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header