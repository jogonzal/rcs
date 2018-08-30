import * as React from 'react'
import './../assets/scss/App.scss'
import NavBar from './NavBar'
import rcsIndoorSeasons from '../stats/rcsIndoorSeasons'

const RawData = () => (
  <div>
    <NavBar />
    <div className='container'>
        <p>Not sure why you'd want this, but here it is:</p>
        <pre>
            {JSON.stringify(rcsIndoorSeasons, undefined, 2)}
        </pre>
    </div>
  </div>
)

export default RawData