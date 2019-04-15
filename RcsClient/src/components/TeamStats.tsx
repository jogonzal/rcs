import * as React from 'react'

import './../assets/scss/App.scss'

import NavBar from './NavBar'
import GameHistory from './GameHistory'
import PlayerChart from './PlayerChart'
import { IGameData } from '../../GameData/IGameData'
import { RestApi } from '../shared/RestApi'

type State = {
  currentSeason: string
  currentSeasonGames?: IGameData[]
}

type Props = {
  teamSeasons: string[]
  teamName: string
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      currentSeason: props.teamSeasons[0],
    }
  }

  componentDidMount() {
    this.loadCurrentSeason()
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (prevState.currentSeason !== this.state.currentSeason) {
      this.loadCurrentSeason()
    }
  }

  componentWillUnmount() {
  }

  private async loadCurrentSeason(): Promise<void> {
    // Clear current games
    this.setState({
      currentSeasonGames: undefined,
    })
    // Get new games and set in state
    const currentSeasonGames = await RestApi.getGames(this.props.teamName, this.state.currentSeason)
    this.setState({
      currentSeasonGames: currentSeasonGames,
    })
  }

  changeSeason(season: string) {
    return () => {
      this.setState({
        currentSeason: season
      })
    }
  }

  renderSeasonButtons = () => {
    return this.props.teamSeasons.map(season => (
      <>
        <button className='btn btn-info' onClick={this.changeSeason(season)} >{season}</button> |
      </>
    ))
  }

  render() {
    if (!this.state.currentSeasonGames) {
      return (
        <p>Loading...</p>
      )
    }

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
            data={this.state.currentSeasonGames}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='assists'
            data={this.state.currentSeasonGames}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='blueCards'
            data={this.state.currentSeasonGames}
            height={300}
            N={5}
          />
          <hr />
          <PlayerChart
            field='pitchers'
            data={this.state.currentSeasonGames}
            height={300}
            N={5}
          />
          <PlayerChart
            field='cleanSheets'
            data={this.state.currentSeasonGames}
            height={300}
            N={5}
          />
          <hr />
          <GameHistory
            data={this.state.currentSeasonGames}
            seasonName={this.state.currentSeason}
            teamName={this.props.teamName}
            />
        </div>
      </div>
    )
  }
}