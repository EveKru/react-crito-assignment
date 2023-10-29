import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="wrapper">
        <Header/>
        <main>
            <div className='container'>

               <h1>Välkommen hit</h1>

            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Home