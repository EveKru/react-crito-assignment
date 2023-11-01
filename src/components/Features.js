import React from 'react'

const Features = () => {
  return (
    <section className='features'>
        <div className='container'>
            <div className="text-and-button">
                <p>Features</p>
                <h2>Our Accounting is <br/> trusted by thousand <br/> of companies</h2>
                <nav>
                    <a className="btn-yellow" href="login.html">Learn More<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </nav>
            </div>
            <div className="grid-columns">
                <div className="business-advice">
                    <i className="fa-regular fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="startup-business"> 
                    <i className="fa-regular fa-lightbulb"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="financial-advice">
                    <i className="fa-solid fa-chart-simple"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="risk-management">
                    <i className="fa-solid fa-gear"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features