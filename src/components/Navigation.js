import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {
    const path = useLocation().pathname;
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand mx-4" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link mx-5 ${path==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link mx-5 ${path==="/about"?"active":""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link mx-5 ${path==="/preregistation"?"active":""}`} to="/preregistation">Registation</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navigation;