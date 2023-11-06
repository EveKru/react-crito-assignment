import React from 'react'
import Amanda from '../assets/images/Amanda.svg'
import Star from '../assets/images/Star.svg'
import Cassandra from '../assets/images/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import Jack from '../assets/images/Jack.svg'

const Whatourclientssay = () => {
  return (
    <section className='whatourclientssay'>
        <div className='container'>
            <div className="heading">
                <p>Testimonial</p>
                <h2>What Our Client Say</h2>
            </div>
            <div className="content">
                <div className="cassandra">
                    <div className="star">
                        <img src= {Star} alt="Star"/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. Lorem ipsum, <br/> dolor sit amet consectetur adipisicing elit.</p>
                    <div className="image-and-text">
                        <img src= {Cassandra} alt=""/>
                        <div className="text">
                            <h3>Cassandra Warren</h3>
                            <p>Business Manager,Dorfus</p>
                        </div>    
                    </div>
                </div>
                <div className="amanda">
                    <div className="star">
                        <img src= {Star} alt="Star"/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. Lorem ipsum, <br/> dolor sit amet consectetur adipisicing elit.</p>
                    <div className="image-and-text">
                        <img src= {Amanda} alt="Amanda"/>
                        <div className="text">
                            <h3>Amanda Tulling</h3>
                            <p>Senior Developer,Square</p>
                        </div>
                    </div>
                </div>
                <div className="jack">
                    <div className="star">
                        <img src= {Star} alt="Star"/>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. Lorem ipsum, <br/> dolor sit amet consectetur adipisicing elit.</p>
                    <div className="image-and-text">
                        <img src= {Jack} alt="Jack"/>
                        <div className="text">
                            <h3>Jack McDogglas</h3>
                            <p>Key Account Manager,Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <a className="btn-black" href="#">All Reviews<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Whatourclientssay