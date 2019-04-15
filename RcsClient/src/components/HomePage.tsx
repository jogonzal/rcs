import * as React from 'react'

import './../assets/scss/App.scss'

import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
type State = {
}

type Props = {
}

export default class HomePage extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{minWidth: '500px'}}>
        <NavBar />
        <div className='container'>
        <Link to='/rcsoutdoor' >
            <Button className='btn-info'>RCS outdoor</Button>
        </Link>
        <br />
        <br />
        <Link to='/rcsindoor' >
            <Button className='btn-info'>RCS indoor</Button>
        </Link>
        <br />
        <br />
        <Link to='/reddevils' >
            <Button className='btn-info'>Red devils</Button>
        </Link>
        </div>
      </div>
    )
  }
}