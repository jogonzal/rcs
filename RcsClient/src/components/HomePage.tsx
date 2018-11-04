import * as React from 'react'

import './../assets/scss/App.scss'

import NavBar from './NavBar'
import { Link } from 'react-router-dom'

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
            <button className='btn btn-info'>RCS outdoor</button>
        </Link>
        <br />
        <br />
        <Link to='/rcsindoor' >
            <button className='btn btn-info'>RCS indoor</button>
        </Link>
        </div>
      </div>
    )
  }
}