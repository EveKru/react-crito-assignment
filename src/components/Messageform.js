import React, { useState } from 'react'

const Messageform = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState ('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const user = {name, email, message}
        const json = JSON.stringify(user)

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: json
        })

        switch (result.status) {
            case 200:
                setSuccess('Meddelandet har skickats.')
                clearForm()
            break
            case 400:
                setError('Något gick fel.')
            break
        }
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

  return (
    <form className='registrationform' onSubmit={handleSubmit} noValidate>
        <div className='container'>
        <h1>Leave us a message <br/> for any information.</h1>
        <p className='errorcolor'>{error} </p>
        <p className='successcolor'>{success}</p>
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