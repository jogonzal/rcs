import { PlayerName, IPlayerGameData, IGameData } from '../../GameData/IGameData'
import sortByDimension from './sortByDimension'
import transformDictionaryIntoObject from './transformDictionaryIntoObject'

export interface IAggregatedPlayerData {
    name: string,
    goals: number,
    assists: number,
    pitchers: number,
    blueCards: number,
    cleanSheets: number,
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
            blueCards: transformToNumber(currentPlayerData.BlueCards),
            cleanSheets: transformToNumber(currentPlayerData.CleanSheets),
            games: 1
        }
        dataToReturn.push(aggregatedPlayerData)
    }
    return dataToReturn
}

export default function getAggregatedPlayerDataForAllGames(games: IGameData[], orderBy: 'goals' | 'assists' | 'blueCards' | 'pitchers' | 'cleanSheets', n: number): IAggregatedPlayerData[] {
    const accumulatedPlayerData: { [key in PlayerName]?: IAggregatedPlayerData } = {}
    for (const game of games) {
        const aggregatedGamePlayerData = getAggregatedPlayerDataForGame(game.playerStats)
        for (const playerGameData of aggregatedGamePlayerData) {
            const existingGameData: IAggregatedPlayerData = accumulatedPlayerData[playerGameData.name]
            if (existingGameData) {
                existingGameData.goals += playerGameData.goals
                existingGameData.assists += playerGameData.assists
                existingGameData.pitchers += playerGameData.pitchers
                existingGameData.games += playerGameData.games
                existingGameData.blueCards += playerGameData.blueCards
                existingGameData.cleanSheets += playerGameData.cleanSheets
            } else {
                const gameDataToSet: IAggregatedPlayerData = {
                    goals: playerGameData.goals,
                    assists: playerGameData.assists,
                    pitchers: playerGameData.pitchers,
                    games: playerGameData.games,
                    blueCards: playerGameData.blueCards,
                    cleanSheets: playerGameData.cleanSheets,
                    name: playerGameData.name
                }
                accumulatedPlayerData[playerGameData.name] = gameDataToSet
            }
        }
    }

    const arr: IAggregatedPlayerData[] = transformDictionaryIntoObject(accumulatedPlayerData) as any

    sortByDimension(arr, orderBy)

    return arr.slice(0, n)
}