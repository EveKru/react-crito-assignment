import React from 'react'
import LI from '../assets/images/LocationIcon.png'
import PI from '../assets/images/PhoneIcon.png'
import EI from '../assets/images/EmailIcon.png'

const Contactboxes = () => {
  return (
    <section className='contactboxes'>
        <div className='container'>
        <div className='VisitUs'>
                <img src= {LI} alt='Location Icon'/>
                <div className='text'>
                    <h3>Visit Us</h3>
                    <p>Sveavägen 31 <br/> 111 34 STOCKHOLM </p>
                </div>
            </div>
            <div className='CallUs'>
                <img src= {PI} alt='Phone Icon'/>
                <div className='text'>
                    <h3>Call Us</h3>
                    <p>+46 (8) 121 470 50 <br/> +46 (8) 121 470 51 </p>
                </div>
            </div>
            <div className='EmailUs'>
                <img src= {EI} alt='Email Icon' />
                <div className='text'>
                    <h3>Email Us</h3>
                    <p>info@crito.com <br/> support@crito.com </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactboxes