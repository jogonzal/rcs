import * as React from 'react'
import './../assets/scss/App.scss'
import NavBar from './NavBar/NavBar'
import GameHistory from './GameHistory'
import spring2018Data from '../../GameData/Spring2018Data'
import PlayerChart from './PlayerChart'
import { IGameData } from '../../GameData/IGameData'

const availableSeasons: { [key: string]: IGameData[] } = {
  'Spring 2018': spring2018Data
}

type State = {
  currentSeason: string
}

type Props = {
}

export default class App extends React.Component<Props, State> {
  changeSeason(season: any) {
    return () => {
      this.setState({
        currentSeason: season
      })
    }
  }

  renderSeasonButtons = () => {
    const arr = Object.keys(availableSeasons)
    return arr.map(season => (
      <>
        <button className='btn btn-info' onClick={this.changeSeason(season)} >{season}</button> |
      </>
    ))
  }

  constructor(props) {
    super(props)
    this.state = { currentSeason: Object.keys(availableSeasons)[0] }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <div>{this.renderSeasonButtons()}</div>
          <hr />
          <h1>Stats for {this.state.currentSeason}</h1>
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
            data={spring2018Data}
          />
        </div>
      </div>
    )
  }
}