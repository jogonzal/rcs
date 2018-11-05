import * as React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <>
  <nav>
    <div className='nav-wrapper'>
      <a href='#!' className='brand-logo'>RCS</a>
      <a href='#' data-target='mobile-demo' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
      <ul className='right hide-on-med-and-down'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rawdata'>Raw data</Link></li>
      </ul>
    </div>
  </nav>

  <ul className='sidenav' id='mobile-demo'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/rawdata'>Raw data</Link></li>
  </ul>
    {/* This is just to make some space */}
    <div style={{height: '20px'}}/>
    </>
)

export default NavBar