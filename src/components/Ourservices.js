import React from 'react'
import BL from '../assets/images/background-lines-right.svg'

const Ourservices = () => {
  return (
    <section className='ourservices'>
        <div className='container'>
            <img src= {BL} alt=""/>
            <div className="text">
                <p>Our Services</p>
                <h2>We Provide The Best <br/> Service for Consulting</h2>
            </div>
            <div class="content">
                <div id="box-1">
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div id="button-1">
                        <a className="btn-round" href="#"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div id="box-2">
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div id="button-2">
                        <a className="btn-round" href="#"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div id="box-3">
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div id="button-3">
                        <a className="btn-round" href="#"><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div id="box-4">
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div id="button-4">
                        <a className="btn-round" href="#"><i class="fa-solid fa-arrow-right"></i></a>
                    </div> 
                </div>
                <div className="button-5">
                    <a class="btn-transparent" href="services.html">Browse Services<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ourservices