import React from 'react'
import SC from '../assets/images/showcase-image.svg'
import BL from '../assets/images/background-lines.svg'

const Showcase = () => {
  return (
    <div className='ShowCase'>
        <img class="background-lines" src= {BL} alt="background lines"></img>
        <div className='container'>
           <div class="content">
                <h1>We Provide The Best Business Sulutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <a class="btn-yellow" href="consulting.html">Get Consulting<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a class="btn-transparent" href="services.html">Learn More<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <img src= {SC} alt="showcase image"/>
        </div>
    </div>
  )
}

export default Showcase