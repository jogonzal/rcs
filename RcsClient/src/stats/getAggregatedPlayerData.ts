import * as _ from 'lodash'
import { PlayerName, IPlayerGameData, IGameData } from '../../GameData/IGameData'

export interface IAggregatedPlayerData {
    name: string,
    goals: number,
    assists: number,
    pitchers: number,
    games: number
}

function transformToNumber(num?: number) {
    return num ? num : 0
}

export function getAggregatedPlayerDataForGame(playerData: { [key in PlayerName]?: IPlayerGameData }): IAggregatedPlayerData[] {
    let dataToReturn: IAggregatedPlayerData[] = []
    for (const playerName of Object.keys(playerData)) {
        const currentPlayerData: IPlayerGameData = playerData[playerName]

        const aggregatedPlayerData: IAggregatedPlayerData = {
            name: playerName,
            goals: transformToNumber(currentPlayerData.Goals),
            assists: transformToNumber(currentPlayerData.Assists),
            pitchers: transformToNumber(currentPlayerData.Pitchers),
            games: 1
        }
        dataToReturn.push(aggregatedPlayerData)
    }
    return dataToReturn
}

export default function getAggregatedPlayerDataForAllGames(games: IGameData[], orderBy: 'goals' | 'assists', n: number) {
    const accumulatedPlayerData: { [key in PlayerName]?: IAggregatedPlayerData } = {}
    for (const game of games) {
        const aggregatedGamePlayerData = getAggregatedPlayerDataForGame(game.PlayerStats)
        for (const playerGameData of aggregatedGamePlayerData) {
            const existingGameData: IAggregatedPlayerData = accumulatedPlayerData[playerGameData.name]
            if (existingGameData) {
                existingGameData.goals += playerGameData.goals
                existingGameData.assists += playerGameData.assists
                existingGameData.pitchers += playerGameData.pitchers
                existingGameData.games += playerGameData.games
            } else {
                const gameDataToSet: IAggregatedPlayerData = {
                    goals: playerGameData.goals,
                    assists: playerGameData.assists,
                    pitchers: playerGameData.pitchers,
                    games: playerGameData.games,
                    name: playerGameData.name
                }
                accumulatedPlayerData[playerGameData.name] = gameDataToSet
            }
        }
    }

    let newData = _.orderBy(accumulatedPlayerData, [orderBy], ['desc'])
    newData = _.take(newData, n)
    return newData
}