import * as React from 'react'
import { rcsOutdoorSeasons } from '../stats/rcsOutdoorSeasons'
import { RestApi } from '../shared/RestApi'
import { rcsIndoorSeasons } from '../stats/rcsIndoorSeasons'
import { IGameData } from '../../GameData/IGameData'

export type Props = {}
export type State = {}

export class MigrateData extends React.Component<Props, State> {
  exportDataForSeason = async (seasons:  { [key: string]: IGameData[] }, teamName: string) => {
    for (const seasonName of Object.keys(seasons)) {
      const season = seasons[seasonName]
      for (const game of season) {
        await RestApi.createGame(teamName, seasonName, game)
        console.log(game)
      }
    }
  }

  exportData = async () => {
    await this.exportDataForSeason(rcsOutdoorSeasons, 'RCS outdoor')
    await this.exportDataForSeason(rcsIndoorSeasons, 'RCS indoor')
  }

  render() {
    return (
      <button onClick={this.exportData}>Migrate!</button>
    )
  }
}