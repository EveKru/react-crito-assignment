import React from 'react'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className='container'>
            <h2>Get News Updates By Signup</h2>
            <form>
            <input type="text" placeholder="username@domain.com"/>
            <button class="btn-yellow">Subscribe <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Newsletter