import React, { useState } from 'react'

const Messageform = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] =useState('')



  return (
    <form className='registrationform'>
        <div className='container'>
        <h1>Leave us a message <br/> for any information.</h1>
        <div className='input-name'>
            <input placeholder='Name*' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='input-email'>
            <input placeholder='Email*' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='input-message'>
            <textarea maxLength={500} placeholder='Your Message*' type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
            <button type='submit' className='btn-yellow'>Send Message <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
    </form>
  )
}

export default Messageform