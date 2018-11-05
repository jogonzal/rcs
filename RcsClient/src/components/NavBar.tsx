import * as React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

const NavBar = () => (
    <>
    <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href='#brand'>React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href='#'>
        Link
      </NavItem>
      <NavItem eventKey={2} href='#'>
        Link
      </NavItem>
      <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href='#'>
        Link Right
      </NavItem>
      <NavItem eventKey={2} href='#'>
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar brand'>
            RCS
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                    <Link to='/' className='nav-link' >
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/rawdata' className='nav-link' >
                        Raw data
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link href='/tasks' className='nav-link' >
                        Tasks
                    </Link>
                </li> */}
                {/* <li className='nav-item dropdown'>
                    <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        Dropdown
                    </a>
                    <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                        <a className='dropdown-item' href='#'>Action</a>
                        <a className='dropdown-item' href='#'>Another action</a>
                        <div className='dropdown-divider'></div>
                        <a className='dropdown-item' href='#'>Something else here</a>
                    </div>
                </li>
                <li className='nav-item'>
                    <a className='nav-link disabled' href='#'>Disabled</a>
                </li> */}
            </ul>
        </div>
    </nav>
    {/* This is just to make some space */}
    <div style={{height: '20px'}}/>
    </>
)

export default NavBar