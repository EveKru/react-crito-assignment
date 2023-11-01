import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Sponsoring from '../components/Sponsoring'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className="wrapper">
        <Header/>
        <main>  
          <Showcase/>
          <Sponsoring/>
          <Features/>


          <Newsletter/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home