import * as React from 'react'
import './../assets/scss/App.scss'
import NavBar from './NavBar'
import spring2018Data from '../../GameData/Spring2018Data'

const RawData = () => (
  <div>
    <NavBar />
    <div className='container'>
        <p>Not sure why you'd want this, but here it is:</p>
        <pre>
            {JSON.stringify(spring2018Data, undefined, 2)}
        </pre>
    </div>
  </div>
)

export default RawData