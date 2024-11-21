import React from 'react'

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
    <div className="navbar-container">
      
      <div className="logo">
        <a href="index.html">
          <img src="./images/LWSBlog.svg" alt="search" />
        </a>
      </div>
      <div className="auth-buttons">
        <button className="btn btn-primary">sign in</button>
        <button className="btn btn-outline">sign up</button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar