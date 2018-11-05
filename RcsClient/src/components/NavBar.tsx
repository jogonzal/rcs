import * as React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <>
      <Link to='/' className='navbar brand'>
          RCS
      </Link>
      <Link to='/' className='nav-link' >
          Home
      </Link>
      <Link to='/rawdata' className='nav-link' >
          Raw data
      </Link>
      {/* This is just to make some space */}
      <div style={{height: '20px'}}/>
    </>
)

export default NavBar