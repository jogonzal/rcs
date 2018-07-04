import * as React from 'react'
import getAggregatedPlayerDataForAllGames from '../stats/getAggregatedPlayerData'
import PlayerChart from './PlayerChart'

const N = 5
const dataForChart = getAggregatedPlayerDataForAllGames('goals', N)

const GoalsChart = () => (
    <>
        <h2>Top {N} Goals</h2>
        <PlayerChart
            data={dataForChart}
            width={800}
            height={300}
        />
    </>
)

export default GoalsChart