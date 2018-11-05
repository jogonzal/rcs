import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { withStyles, createStyles } from '@material-ui/core/styles'

const styles = createStyles({
  root: {
    flexGrow: 20,
  },
  grow: {
    flexGrow: 10,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 200,
  },
})

const NavBar = (classes) => (
    <>
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
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

export default withStyles(styles)(NavBar)