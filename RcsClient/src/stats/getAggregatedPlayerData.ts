import * as _ from 'lodash'
import spring2018Data from '../../GameData/Spring2018Data'
import { PlayerName, IPlayerGameData } from '../../GameData/IGameData'

const accumulatedScoresAndAssists: { [key in PlayerName]?: IPlayerGameData } = {}
for (const game of spring2018Data) {
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

export interface IAggregatedPlayerData {
    name: string,
    goals: number,
    assists: number
}

let dataForChart: IAggregatedPlayerData[] = []
for (const playerName of Object.keys(accumulatedScoresAndAssists)) {
    const currentPlayerData: IPlayerGameData = accumulatedScoresAndAssists[playerName]
    const aggregatedPlayerData: IAggregatedPlayerData = {
        name: playerName,
        goals: currentPlayerData.Goals,
        assists: currentPlayerData.Assists
    }
    dataForChart.push(aggregatedPlayerData)
}

export default function getAggregatedPlayerData(orderBy: 'goals' | 'assists', n: number) {
    let newData = _.orderBy(dataForChart, [orderBy], ['desc'])
    newData = _.take(newData, n)
    return newData
}