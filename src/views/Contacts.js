import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Letsconnect from '../components/Letsconnect'
import Contactboxes from '../components/Contactboxes'
import Messageform from '../components/Messageform'

const Contacts = () => {
  return (
    <div className='wrapper'>
         <Header/>
        <main>
          <Letsconnect/>
          <Contactboxes/>
          <Messageform/>
          <Map/>
        </main>
        <Footer/>
    </div>
  )
}

export default Contacts