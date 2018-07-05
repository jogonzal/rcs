import * as React from 'react'
import './../assets/scss/App.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { IGameData } from '../../GameData/IGameData'
import getAggregatedPlayerDataForAllGames from '../stats/getAggregatedPlayerData'

type State = {
}

type Props = {
    data: IGameData[]
    height: number
    width: number
    N: number,
    field: 'goals' | 'assists'
}

export default class PlayerChart extends React.Component<Props, State> {
    render() {
        const dataForChart = getAggregatedPlayerDataForAllGames(this.props.data, this.props.field, this.props.N)

        return (
            <>
                <h2></h2>
                <BarChart width={this.props.width} height={this.props.height} data={dataForChart}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={ this.props.field } fill='#f49542' />
                </BarChart>
            </>
        )
    }
}