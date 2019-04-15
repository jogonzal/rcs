import { IGameData, IGameDataForApi } from '../../GameData/IGameData'
import { shouldMockApis } from './shouldMockExternalApis'

export class RestApi {
  public static async getGames(teamName: string, seasonName: string): Promise<IGameData[]> {
    if (shouldMockApis()) {
      return [
        {
          opponent: 'Turn 10',
          date: '4/10/2018',
          goalsInFavor: 5,
          goalsAgainst: 2,
          notes: 'Good game, tough opponent',
          playerStats:
          {
              Alex: { Goals: 1 },
              JorgeA: { Assists: 1, Pitchers: 1 },
              MartinM: { Goals: 2, Pitchers: 1 },
              MarkT: { Goals: 2 },
              Nimish: { Assists: 1 },
          },
          partitionKey: '',
          rowKey: '',
      },
      {
          opponent: 'Turn 10',
          date: '4/11/2018',
          goalsInFavor: 5,
          goalsAgainst: 2,
          notes: 'Good game, tough opponent',
          playerStats:
          {
              Alex: { Goals: 1 },
              JorgeA: { Assists: 1, Pitchers: 1 },
              MartinM: { Goals: 2, Pitchers: 1 },
              MarkT: { Goals: 2 },
              Nimish: { Assists: 1 },
          },
          partitionKey: '',
          rowKey: '',
      },
      ]
    }

    const response = await fetch(`/api/games?season=${encodeURIComponent(seasonName)}&teamName=${encodeURIComponent(teamName)}`)
    if (response.status !== 200) {
      throw new Error(`Failed to load games!`)
    }
    const currentSeasonGames: IGameDataForApi[] = await response.json()
    for (const game of currentSeasonGames) {
      game.playerStats = JSON.parse(game.serializedPlayerStats)
    }
    return currentSeasonGames
  }

  private static getRec(): string {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('rec') || ''
  }

  static async createGame(teamName: string, seasonName: string, game: IGameData): Promise<void> {
    const gameDataToSend: IGameDataForApi = {
      ...game,
      serializedPlayerStats: JSON.stringify(game.playerStats),
    }

    const response = await fetch(`/api/games?season=${encodeURIComponent(seasonName)}&teamName=${encodeURIComponent(teamName)}&rec=${this.getRec()}`, {
      method: 'POST',
      body: JSON.stringify(gameDataToSend)
    })
    if (response.status !== 200) {
      throw new Error(`Failed to create game!`)
    }
  }

  static async deleteGame(teamName: string, seasonName: string, gameKey: string): Promise<void> {
    const response = await fetch(`/api/games?season=${encodeURIComponent(seasonName)}&teamName=${encodeURIComponent(teamName)}&rec=${this.getRec()}&gameId=${encodeURIComponent(gameKey)}`, {
      method: 'DELETE',
    })
    if (response.status !== 200) {
      throw new Error(`Failed to delete game!`)
    }
  }
}