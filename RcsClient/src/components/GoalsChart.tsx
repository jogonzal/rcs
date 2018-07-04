import * as React from 'react'
import './../assets/scss/App.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import getAggregatedPlayerData from '../stats/getAggregatedPlayerData'

const dataForChart = getAggregatedPlayerData('goals', 10)

const GoalsChart = () => (
    <BarChart width={800} height={300} data={dataForChart}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='goals' fill='#f49542' />
    </BarChart>
)

export default GoalsChart