import * as React from 'react'
import getAggregatedPlayerData from '../stats/getAggregatedPlayerData'
import PlayerChart from './PlayerChart'

const N = 5
const dataForChart = getAggregatedPlayerData('goals', N)

const GoalsChart = () => (
    <>
        <h2>Top {N} Goalscorers</h2>
        <PlayerChart
            data={dataForChart}
            width={800}
            height={300}
        />
    </>
)

export default GoalsChart