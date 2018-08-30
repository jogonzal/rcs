import * as React from 'react'

import './../assets/scss/App.scss'

import NavBar from './NavBar'
import GameHistory from './GameHistory'
import PlayerChart from './PlayerChart'
import rcsIndoorSeasons from '../stats/rcsIndoorSeasons'

type State = {
  currentSeason: string
}

type Props = {
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
    const arr = Object.keys(rcsIndoorSeasons)
    return arr.map(season => (
      <>
        <button className='btn btn-info' onClick={this.changeSeason(season)} >{season}</button> |
      </>
    ))
  }

  constructor(props) {
    super(props)
    this.state = {
      currentSeason: Object.keys(rcsIndoorSeasons)[0]
    }
  }

  render() {
    return (
      <div style={{minWidth: '500px'}}>
        <NavBar />
        <div className='container'>
          <div>{this.renderSeasonButtons()}</div>
          <hr />
          <h1>Stats for {this.state.currentSeason}</h1>
          <PlayerChart
            field='goals'
            data={rcsIndoorSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='assists'
            data={rcsIndoorSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='blueCards'
            data={rcsIndoorSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='pitchers'
            data={rcsIndoorSeasons[this.state.currentSeason]}
            height={300}
            N={5}
          />
          <hr />
          <GameHistory
            data={rcsIndoorSeasons[this.state.currentSeason]}
            />
        </div>
      </div>
    )
  }
}