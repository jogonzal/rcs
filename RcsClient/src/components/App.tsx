import * as React from 'react'
import './../assets/scss/App.scss'
import NavBar from './NavBar/NavBar'
import GoalsChart from './GoalsChart'

const App = () => (
  <div>
    <NavBar />
    <div className='container'>
      <GoalsChart />
    </div>
  </div>
)

export default App