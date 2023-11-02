import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Sponsoring from '../components/Sponsoring'
import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
import Aboutcompany from '../components/Aboutcompany'
import Ourservices from '../components/Ourservices'
import Whychooseus from '../components/Whychooseus'
import Projectandcase from '../components/Projectandcase'
import Meetourteam from '../components/Meetourteam'
import Whatourclientssay from '../components/Whatourclientssay'
import Articleandnews from '../components/Articleandnews'

const Home = () => {
  return (
    <div className="wrapper">
        <Header/>
        <main>  
          <Showcase/>
          <Sponsoring/>
          <Features/>
          <Aboutcompany/>
          <Ourservices/>
          <Whychooseus/>
          <Projectandcase/>
          <Meetourteam/>
          <Whatourclientssay/>
          <Articleandnews/>
          <Newsletter/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home