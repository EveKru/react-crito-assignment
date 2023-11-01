import React from 'react'
import Dorfus from '../assets/images/dorfus.svg'
import Paperz from '../assets/images/paperz.svg'
import Martino from '../assets/images/martino.svg'
import Square from '../assets/images/square.svg'
import Gobona from '../assets/images/gobona.svg'


const Sponsoring = () => {
  return (
    <section className='sponsoring'>
        <div className="container">
            <div className="images">
                <img src= {Paperz} alt=""/>
                <img src= {Dorfus} alt=""/>
                <img src= {Martino} alt=""/>
                <img src= {Square} alt=""/>
                <img src= {Gobona} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Sponsoring