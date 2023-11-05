import React from 'react'
import AI1 from '../assets/images/articleandnews1.svg'
import AI2 from '../assets/images/articleandnews2.svg'
import AI3 from '../assets/images/articleandnews3.svg'

const Articleandnews = () => {
  return (
    <section className='articleandnews'>
        <div className='container'>
        <div className="header">
            <div className='text'>
            <p>Article & News</p>
            <h2>Get Every Single Article & News</h2>
            </div>
            <div className="button">
                <a className="btn-transparent" href="#">Browse articles<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
        <div className="content">
            <div className="article-1">
                <img src= {AI1} alt=""/>
                <p>Business</p>
                <h3>How To Use Digitalization <br/> In The classNameroom</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="article-2">
                <img src= {AI2} alt="aricle image"/>
                <p>Business</p>
                <h3>How To Implement Chat GPT <br/> In Your Projects</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="article-3">
                <img src= {AI3} alt=""/>
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Articleandnews