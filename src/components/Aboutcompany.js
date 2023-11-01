import React from 'react'
import Samantha from '../assets/images/Samantha-Brown.svg'

const Aboutcompany = () => {
  return (
    <section className='aboutcompany'>
        <div className='container'>
            <img src= {Samantha} alt=""/>
            <div className="text">
                <div className="samantha">
                    <h3>Samantha Brown,</h3>
                    <p>Founder</p>
                </div>
                <div>
                    <p id="text2">"Lorem ipsum, dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="content">
                <div className="heading">
                    <p>About Company</p>
                    <h2>We Are Business <br/> Consulting & Credit <br/> Repair Experts</h2>
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="buttons">
                    <div id="button-1">
                        <a className="btn-black" href="#">Learn More<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <div id="button-2">
                        <a className="btn-round" href="#"><i class="fa-solid fa-play"></i></a>
                    </div>
                    <p>Intro Video</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutcompany