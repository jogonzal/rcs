import * as React from 'react'
import './../assets/scss/App.scss'
import NavBar from './NavBar/NavBar'
import GameHistory from './GameHistory'
import spring2018Data from '../../GameData/Spring2018Data'
import PlayerChart from './PlayerChart'

// TODO: picker for data and pass in data to goals chart and assists chart
const data = spring2018Data

const App = () => (
  <div>
    <NavBar />
    <div className='container'>
      <PlayerChart
        field='goals'
        data={spring2018Data}
        height={300}
        width={800}
        N={5}
      />
      <hr />
      <PlayerChart
        field='assists'
        data={spring2018Data}
        height={300}
        width={800}
        N={5}
      />
      <hr />
      <GameHistory
        data= {spring2018Data}
        title= 'Game history'
      />
    </div>
  </div>
)

export default App