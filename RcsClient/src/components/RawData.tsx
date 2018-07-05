import * as React from 'react'
import './../assets/scss/App.scss'
import NavBar from './NavBar'
import availableSeasons from '../stats/availableSeasons'

const RawData = () => (
  <div>
    <NavBar />
    <div className='container'>
        <p>Not sure why you'd want this, but here it is:</p>
        <pre>
            {JSON.stringify(availableSeasons, undefined, 2)}
        </pre>
    </div>
  </div>
)

export default RawData