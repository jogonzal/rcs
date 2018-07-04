import * as React from 'react'
import './../assets/scss/App.scss'
import NavBar from './NavBar/NavBar'
import GoalsChart from './GoalsChart'
import AssistsChart from './AssistsChart'
import GameHistory from './GameHistory'
import spring2018Data from '../../GameData/Spring2018Data'

// TODO: picker for data and pass in data to goals chart and assists chart
const data = spring2018Data

const App = () => (
  <div>
    <NavBar />
    <div className='container'>
      <GoalsChart />
      <hr />
      <AssistsChart />
      <hr />
      <GameHistory
        data= {spring2018Data}
        title= 'Game history'
      />
    </div>
  </div>
)

export default App