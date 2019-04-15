import * as React from 'react'
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import { RestApi } from '../shared/RestApi'
import { PlayerName, IPlayerGameData, PlayerNames } from '../../GameData/IGameData'
import {
  NormalPeoplePicker,
} from 'office-ui-fabric-react/lib/Pickers'
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona'
import PlayerPics from '../assets/PlayerPics'
import { Label } from 'office-ui-fabric-react/lib/Label'

export type Props = {
  teamName: string
  seasonName: string
}
export type State = {
  opponent: string
  date: string
  goalsInFavor: number
  goalsAgainst: number
  notes: string
  // accumulatedPlayerStats: { [key in PlayerName]?: IPlayerGameData }
  playersWithGoals: PlayerName[]
  playersWithAssists: PlayerName[]
  playersWithBlueCards: PlayerName[]
  playersWithPitchers: PlayerName[]
  playersWithCleanSheets: PlayerName[]
}

export class AddGame extends React.Component<Props, State> {
  onResolveSuggestions: (filter: string) => IPersonaProps[] | PromiseLike<IPersonaProps[]> = (filter: string): IPersonaProps[] => {
    const personaProps: IPersonaProps[] = []
    for (const playerKey of Object.keys(PlayerNames)) {
      const playerName: string = PlayerNames[playerKey]
      if (playerName.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
        const playerPic = PlayerPics.GetPic(playerKey as PlayerName)
        personaProps.push({
          imageUrl: playerPic,
          // imageInitials: 'PV',
          text: playerName,
          secondaryText: 'Soccer player',
          // tertiaryText: 'In a meeting',
          optionalText: playerKey,
        })
      }
    }
    return personaProps
  }
  onEmptyInputFocus: ((selectedItems?: IPersonaProps[] | undefined) => IPersonaProps[] | PromiseLike<IPersonaProps[]>) | undefined = (): IPersonaProps[] => {
    const personaProps: IPersonaProps[] = []
    for (const playerKey of Object.keys(PlayerNames)) {
      const playerName = PlayerNames[playerKey]
      const playerPic = PlayerPics.GetPic(playerKey as PlayerName)
      personaProps.push({
        imageUrl: playerPic,
        // imageInitials: 'PV',
        text: playerName,
        secondaryText: 'Soccer player',
        // tertiaryText: 'In a meeting',
        optionalText: playerKey,
      })
    }
    return personaProps
  }

  onGoalsChanged = (items?: IPersonaProps[]) => {
    if (items) {
      const players: PlayerName[] = []
      for (const player of items) {
        const playerKey = player.optionalText as PlayerName
        players.push(playerKey)
      }
      this.setState({
        playersWithGoals: players,
      })
    }
  }

  onAssistsChanged = (items?: IPersonaProps[]) => {
    if (items) {
      const players: PlayerName[] = []
      for (const player of items) {
        const playerKey = player.optionalText as PlayerName
        players.push(playerKey)
      }
      this.setState({
        playersWithAssists: players,
      })
    }
  }

  onBlueCardsChanged = (items?: IPersonaProps[]) => {
    if (items) {
      const players: PlayerName[] = []
      for (const player of items) {
        const playerKey = player.optionalText as PlayerName
        players.push(playerKey)
      }
      this.setState({
        playersWithBlueCards: players,
      })
    }
  }

  onPitchersChanged = (items?: IPersonaProps[]) => {
    if (items) {
      const players: PlayerName[] = []
      for (const player of items) {
        const playerKey = player.optionalText as PlayerName
        players.push(playerKey)
      }
      this.setState({
        playersWithPitchers: players,
      })
    }
  }

  onCleanSheetsChanged = (items?: IPersonaProps[]) => {
    if (items) {
      const players: PlayerName[] = []
      for (const player of items) {
        const playerKey = player.optionalText as PlayerName
        players.push(playerKey)
      }
      this.setState({
        playersWithCleanSheets: players,
      })
    }
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      opponent: '',
      date: new Date().toLocaleDateString(),
      goalsAgainst: 0,
      goalsInFavor: 0,
      notes: '',
      playersWithAssists: [],
      playersWithBlueCards: [],
      playersWithCleanSheets: [],
      playersWithGoals: [],
      playersWithPitchers: [],
    }
  }

  createClicked = async () => {
    const myPlayerStats: { [key in PlayerName]?: IPlayerGameData } = {}
    for (const playerKey of this.state.playersWithGoals) {
      if (!myPlayerStats[playerKey]) {
        myPlayerStats[playerKey] = {
          Goals: 0,
          Assists: 0,
          Pitchers: 0,
          BlueCards: 0,
          CleanSheets: 0,
        }
      }
      myPlayerStats[playerKey]!.Goals! += 1
    }
    for (const playerKey of this.state.playersWithAssists) {
      if (!myPlayerStats[playerKey]) {
        myPlayerStats[playerKey] = {
          Goals: 0,
          Assists: 0,
          Pitchers: 0,
          BlueCards: 0,
          CleanSheets: 0,
        }
      }
      myPlayerStats[playerKey]!.Assists! += 1
    }
    for (const playerKey of this.state.playersWithBlueCards) {
      if (!myPlayerStats[playerKey]) {
        myPlayerStats[playerKey] = {
          Goals: 0,
          Assists: 0,
          Pitchers: 0,
          BlueCards: 0,
          CleanSheets: 0,
        }
      }
      myPlayerStats[playerKey]!.BlueCards! += 1
    }
    for (const playerKey of this.state.playersWithCleanSheets) {
      if (!myPlayerStats[playerKey]) {
        myPlayerStats[playerKey] = {
          Goals: 0,
          Assists: 0,
          Pitchers: 0,
          BlueCards: 0,
          CleanSheets: 0,
        }
      }
      myPlayerStats[playerKey]!.CleanSheets! += 1
    }
    for (const playerKey of this.state.playersWithPitchers) {
      if (!myPlayerStats[playerKey]) {
        myPlayerStats[playerKey] = {
          Goals: 0,
          Assists: 0,
          Pitchers: 0,
          BlueCards: 0,
          CleanSheets: 0,
        }
      }
      myPlayerStats[playerKey]!.Pitchers! += 1
    }

    await RestApi.createGame(this.props.teamName, this.props.seasonName, {
      date: this.state.date,
      goalsAgainst: this.state.goalsAgainst,
      goalsInFavor: this.state.goalsInFavor,
      notes: this.state.notes,
      opponent: this.state.opponent,
      partitionKey: '',
      rowKey: '',
      playerStats: myPlayerStats,
    })
    window.location.reload()
  }

  render() {
    return (
      <div className='container'>
          <TextField label='Opponent' onChange={(_e, val) => this.setState({ opponent: val! })}/>
          <TextField label='Date' value={ this.state.date } onChange={(_e, val) => this.setState({ date: val! })}/>
          <TextField label='Goals in favor' onChange={(_e, val) => this.setState({ goalsInFavor: parseInt(val!) })}/>
          <TextField label='GoalsAgainst' onChange={(_e, val) => this.setState({ goalsAgainst: parseInt(val!) })}/>
          <TextField label='Notes' onChange={(_e, val) => this.setState({ notes: val! })}/>
          <br />
          <div className='container'>
            <p>Add data for individual players here:</p>
            { this.renderIndividualPlayerPicker('Goals', this.onGoalsChanged) }
            { this.renderIndividualPlayerPicker('Assists', this.onAssistsChanged) }
            { this.renderIndividualPlayerPicker('BlueCards', this.onBlueCardsChanged) }
            { this.renderIndividualPlayerPicker('Pitchers', this.onPitchersChanged) }
            { this.renderIndividualPlayerPicker('CleanSheets', this.onCleanSheetsChanged) }
          </div>
          <br /> <br />
          <PrimaryButton
            text='Create'
            onClick={this.createClicked}
          />
      </div>
    )
  }
  renderIndividualPlayerPicker(label: string, onChange: (items?: IPersonaProps[]) => void): React.ReactNode {
    return (
      <div>
        <Label>{ label }</Label>
        <NormalPeoplePicker
          onResolveSuggestions={this.onResolveSuggestions}
          onEmptyInputFocus={this.onEmptyInputFocus}
          // onItemSelected={this.onPlayerSelected}
          onChange={onChange}
        />
      </div>
    )
  }
}