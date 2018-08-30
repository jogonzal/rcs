import * as React from 'react'

import './../assets/scss/App.scss'

import NavBar from './NavBar'
import GameHistory from './GameHistory'
import PlayerChart from './PlayerChart'
import { IGameData } from '../../GameData/IGameData'

type State = {
  currentSeason: string
}

type Props = {
  teamSeasons: { [key: string]: IGameData[] }
  teamName: string
}

export default class App extends React.Component<Props, State> {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  changeSeason(season: any) {
    return () => {
      this.setState({
        currentSeason: season
      })
    }
  }

  renderSeasonButtons = () => {
    const arr = Object.keys(this.props.teamSeasons)
    return arr.map(season => (
      <>
        <button className='btn btn-info' onClick={this.changeSeason(season)} >{season}</button> |
      </>
    ))
  }

  constructor(props) {
    super(props)
    this.state = {
      currentSeason: Object.keys(this.props.teamSeasons)[0]
    }
  }

  render() {
    return (
      <div style={{minWidth: '500px'}}>
        <NavBar />
        <div className='container'>
          <div>{this.renderSeasonButtons()}</div>
          <h1>{this.props.teamName}</h1>
          <hr />
          <h1>Stats for {this.state.currentSeason}</h1>
          <PlayerChart
            field='goals'
            data={this.props.teamSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='assists'
            data={this.props.teamSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='blueCards'
            data={this.props.teamSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='pitchers'
            data={this.props.teamSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <GameHistory
            data={this.props.teamSeasons[this.state.currentSeason]}
            />
        </div>
      </div>
    )
  }
}