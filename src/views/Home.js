import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'

const Home = () => {
  return (
    <div className="wrapper">
        <Header/>
        <main>  
          <Showcase/>
 
        </main>
        <Footer/>
    </div>
  )
}

export default Home