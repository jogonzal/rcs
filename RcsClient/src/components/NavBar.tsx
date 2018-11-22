import * as React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

const NavBar = () => (
    <>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/' className='nav-link' >
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} >
            <Link to='/rawdata' className='nav-link' >
              Raw data
            </Link>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={2} href='#'>
            <Link to='/signin' className='nav-link' >
              Sign in
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* This is just to make some space */}
    <div style={{height: '20px'}}/>
    </>
)

export default NavBar