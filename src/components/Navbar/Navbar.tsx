import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <span className="navbar-brand">My quotes</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to='/' className="nav-link">
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/star-wars' className="nav-link">
                  Star Wars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/saying' className="nav-link">
                  Saying
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/humour' className="nav-link">
                  Humour
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/motivational' className="nav-link">
                  Motivational
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
