import React, { useState } from 'react'

const Messageform = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState ('')
    const [nameError, setnameError] = useState(false)
    const [emailError, setemailError] = useState(false)
    const [messageError, setmessageError] = useState(false)
    

    const handleChange = (e) => {

        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setnameError(validateLength(e.target.value))
            break
            case 'email':
                setEmail(e.target.value)
                setemailError(validateLength(e.target.value))
            break
            case 'message':
                setMessage(e.target.value)
                setmessageError(validateLength(e.target.value))
            break
        }
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const validateLength = (value) => {
        if (value.length < 1)
            return true
        return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        for (let element of e.target) {

            switch (element.name) {
                case 'name':
                    setName(element.value)
                    setnameError(validateLength(element.value))
                break
                case 'email':
                    setEmail(element.value)
                    setemailError(validateLength(element.value))
                break
                case 'message':
                    setMessage(element.value)
                    setmessageError(validateLength(element.value))
                break
            }
        }

        if (!nameError && !emailError && !messageError) {
            
            const user = {name, email, message}
            const json = JSON.stringify(user)

            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type':'application/json'
                },
                body: json
            })

            if (result.status == 200) {
                setSuccess('Meddelandet har skickats.') 
                clearForm()
            }
        }
    }

  return (
    <section className='registrationform'>
        <div className='container'>
            <form onSubmit={handleSubmit} noValidate>
                <h1>Leave us a message <br/> for any information.</h1>
                <p className='successcolor'>{success}</p>
                <div className='input-name'>
                    <label className='errorvalidate'>{`${nameError ? 'Förnamn måste anges.' : ''}`} </label>
                    <input placeholder='Name*' type='text' name='name' value={name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className='input-email'>
                    <label className='errorvalidate'>{`${emailError ? 'Email måste anges.' : ''}`} </label>
                    <input placeholder='Email*' type='text' name='email' value={email} onChange={(e) => handleChange(e)}/>
                </div>
                <div className='input-message'>
                    <label className='errorvalidate'>{`${messageError ? 'Fältet får inte vara tomt.' : ''}`} </label>
                    <textarea maxLength={500} placeholder='Your Message*' type='text' name='message' value={message} onChange={(e) => handleChange(e)}/>
                </div>
                <button type='submit' className='btn-yellow'>Send Message<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Messageform