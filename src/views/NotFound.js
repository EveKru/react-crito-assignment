import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='PageNotFound'>
      <h1>404 Page Not Found</h1>
      <p>Unable to find the page that you are looking for.</p>
      <Link to="/" className="btn-yellow">Go back to the beginning <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
    </section>
  )
}

export default NotFound