import * as _ from 'lodash'
import { PlayerName, IPlayerGameData, IGameData } from '../../GameData/IGameData'

export interface IAggregatedPlayerData {
    name: string,
    goals: number,
    assists: number
}

export function getAggregatedPlayerDataForGame(playerData: { [key in PlayerName]?: IPlayerGameData }): IAggregatedPlayerData[] {
    let dataToReturn: IAggregatedPlayerData[] = []
    for (const playerName of Object.keys(playerData)) {
        const currentPlayerData: IPlayerGameData = playerData[playerName]
        if (currentPlayerData.Assists === 0 && currentPlayerData.Goals === 0) {
            continue
        }
        const aggregatedPlayerData: IAggregatedPlayerData = {
            name: playerName,
            goals: currentPlayerData.Goals,
            assists: currentPlayerData.Assists
        }
        dataToReturn.push(aggregatedPlayerData)
    }
    return dataToReturn
}

export default function getAggregatedPlayerDataForAllGames(games: IGameData[], orderBy: 'goals' | 'assists', n: number) {
    const accumulatedScoresAndAssists: { [key in PlayerName]?: IPlayerGameData } = {}
    for (const game of games) {
        for (const playerName of Object.keys(game.PlayerStats)) {
            const newGameData: IPlayerGameData = game.PlayerStats[playerName]
            const newGameDataGoals = newGameData.Goals ? newGameData.Goals : 0
            const newGameDataAssists = newGameData.Assists ? newGameData.Assists : 0

            const existingGameData: IPlayerGameData = accumulatedScoresAndAssists[playerName]
            if (existingGameData) {
                existingGameData.Goals += newGameDataGoals,
                existingGameData.Assists += newGameDataAssists
            } else {
                const gameDataToSet: IPlayerGameData = {
                    Goals: newGameDataGoals,
                    Assists: newGameDataAssists
                }
                accumulatedScoresAndAssists[playerName] = gameDataToSet
            }
        }
    }

    const aggregatedPlayerDataForAllGames: IAggregatedPlayerData[] = getAggregatedPlayerDataForGame(accumulatedScoresAndAssists)

    let newData = _.orderBy(aggregatedPlayerDataForAllGames, [orderBy], ['desc'])
    newData = _.take(newData, n)
    return newData
}