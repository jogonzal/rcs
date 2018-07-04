import * as React from 'react'
import getAggregatedPlayerDataForAllGames from '../stats/getAggregatedPlayerData'
import PlayerChart from './PlayerChart'

const N = 5
const dataForChart = getAggregatedPlayerDataForAllGames('assists', N)

const AssistsChart = () => (
    <>
        <h2>Top {N} Assists</h2>
        <PlayerChart
            data={dataForChart}
            width={800}
            height={300}
        />
    </>
)

export default AssistsChart