import * as React from 'react'

import './../assets/scss/App.scss'

import NavBar from './NavBar'
import Link from './Link'

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
        <Link href='/rcsoutdoor' >
            <button className='btn btn-info'>RCS outdoor</button>
        </Link>
        <br />
        <br />
        <Link href='/rcsindoor' >
            <button className='btn btn-info'>RCS inddoor</button>
        </Link>
        </div>
      </div>
    )
  }
}