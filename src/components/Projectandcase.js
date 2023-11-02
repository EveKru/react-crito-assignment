import React from 'react'
import AI1 from '../assets/images/article-image-1.png'
import AI2 from '../assets/images/article-image-2.png'
import AI3 from '../assets/images/article-image-3.png'
import AI4 from '../assets/images/article-image-4.png'

const Projectandcase = () => {
  return (
    <section className='projectandcase'>
        <div className='container'>
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let's Look At Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <article>
                    <img src= {AI1} alt=""/>
                    <h3>Grow your business</h3>
                    <a href="">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </article>
                <article>
                    <img src= {AI2} alt=""/>
                    <h3>Why your client needs a responsive website</h3>
                    <a href="">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </article>
                <article>
                    <img src= {AI3} alt=""/>
                    <h3>Educate your employees to get better result</h3>
                    <a href="">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </article>
                <article>
                    <img src= {AI4} alt=""/>
                    <h3>Business insights is a important piece of your business</h3>
                    <a href="">Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </article>
            </div>
            <div className='center-content'>
            <a className="btn-black" href="projects.html.html">All recent projects<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Projectandcase