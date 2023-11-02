import React from 'react'
import Dots from '../assets/images/dot.svg'
import Mark from '../assets/images/Mark Aubri.svg'
import Justin from '../assets/images/Justin Willoman.svg'
import Kimberly from '../assets/images/Kimberly Hansen.svg'
import Kristine from '../assets/images/Kristine-Palmer.svg'

const Meetourteam = () => {
  return (
    <section className='meetourteam'>
        <div className='container'>
            <div className="heading">
                <p>Meet Our Team</p>
                <h2>Experience Team members</h2>
                <div className="button">
                    <a className="btn-transparent" href="#">Browse Team<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="content">
                <div className="images">
                    <img src= {Kristine} alt="Kristine Palmer"/>
                    <img src= {Mark} alt="Mark Aubri"/> 
                    <img src= {Kimberly} alt="Kimberly Hansen"/>
                    <img src= {Justin} alt="Justin Willoman"/>
                </div>
                <div className="text">
                    <div>
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div>
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div>
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                </div>
                <div id="dots">
                    <img id="dots" src= {Dots} alt=""/>
                </div>
            <div/>
        </div>
    </section>
  )
}

export default Meetourteam