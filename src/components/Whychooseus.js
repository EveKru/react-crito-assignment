import React from 'react'
import TPC from "../assets/images/Two-people-chatting.svg"

const Whychooseus = () => {
  return (
    <section className='whychooseus'>
        <div className='container'>
            <div className="content">
                <div class="heading">
                    <p>Why Choose Us</p>
                    <h2>Why We Are The <br/> Best Business <br/> Consulting Agency</h2>
                </div>
                <div id="thumbs-up">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <div>
                        <h3>Process Exellence</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div id="diamond">
                    <i class="fa-regular fa-gem"></i>
                    <div>
                        <h3>Strategic Planning</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div id="codepen">
                    <i className="fa-brands fa-codepen"></i>
                    <div>
                        <h3>Experience Design</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div id="brain">
                    <i className="fa-solid fa-brain"></i>
                    <div>
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="background-box"></div>
            <img src= {TPC} alt=""/>
        </div>
    </section>
  )
}

export default Whychooseus