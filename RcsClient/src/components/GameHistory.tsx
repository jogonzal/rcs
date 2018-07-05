import * as React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import spring2018Data from '../../GameData/Spring2018Data'
import { IGameData } from '../../GameData/IGameData'
import { getAggregatedPlayerDataForGame, IAggregatedPlayerData } from '../stats/getAggregatedPlayerData'
import _ = require('lodash')

type State = {
}

type Props = {
    data: IGameData[]
}

export default class GameHistory extends React.Component<Props, State> {
    renderResult = (gameData: IGameData) => {
        // TODO: colors
        if (gameData.GoalsInFavor > gameData.GoalsAgainst) {
            return (<span className='text-success'>WIN</span>)
        } else if (gameData.GoalsAgainst > gameData.GoalsInFavor) {
            return (<span className='text-danger'>LOST</span>)
        }
        return (<span className='text-primary'>TIE</span>)
    }

    renderRow = (gameData: IGameData, i: number) => {
        const aggregatePlayerStats = getAggregatedPlayerDataForGame(gameData.PlayerStats)
        const sortedByGoals: IAggregatedPlayerData[] = _.orderBy(aggregatePlayerStats, ['goals'], ['desc'])

        const goalsDescriptionArr: string[] = []
        for (const playerStats of sortedByGoals) {
            if (playerStats.goals > 0) {
                const descriptionSuffix = ' (' + playerStats.goals + ')'
                goalsDescriptionArr.push(playerStats.name + descriptionSuffix)
            }
        }

        const sortedByAssists: IAggregatedPlayerData[] = _.orderBy(aggregatePlayerStats, ['assists'], ['desc'])
        const assistsDescriptionArr: string[] = []
        for (const playerStats of sortedByAssists) {
            if (playerStats.assists > 0) {
                const descriptionSuffix = ' (' + playerStats.assists + ')'
                assistsDescriptionArr.push(playerStats.name + descriptionSuffix)
            }
        }

        const goalsDescription = goalsDescriptionArr.join(', ')
        const assistsDescription = assistsDescriptionArr.join(', ')

        return (
            <tr key={i}>
                <th scope='row'>{gameData.Opponent}</th>
                <td><strong>{this.renderResult(gameData)}</strong> {gameData.GoalsInFavor} - {gameData.GoalsAgainst}</td>
                <td>{gameData.Date}</td>
                <td>{goalsDescription}</td>
                <td>{assistsDescription}</td>
            </tr>
        )
    }

    render() {
        return(
            <>
                <h2>Game history</h2>
                <table className='table'>
                    <thead>
                        <tr>
                        <th scope='col'>Opponent</th>
                        <th scope='col'>Result</th>
                        <th scope='col'>Date</th>
                        <th scope='col'>Goals</th>
                        <th scope='col'>Assists</th>
                        </tr>
                    </thead>
                    <tbody>
                        {spring2018Data.map(this.renderRow)}
                    </tbody>
                </table>
            </>
            )
    }
}