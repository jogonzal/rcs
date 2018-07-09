import * as React from 'react'
import './../assets/scss/App.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { IGameData } from '../../GameData/IGameData'
import getAggregatedPlayerDataForAllGames from '../stats/getAggregatedPlayerData'
import CustomBarLabel from './CustomBarLabel'
import CustomAxisTick from './CustomAxisTick';

type State = {
}

type Props = {
    data: IGameData[]
    height: number
    N: number,
    field: 'goals' | 'assists'
}

export default class PlayerChart extends React.Component<Props, State> {
    render() {
        const dataForChart = getAggregatedPlayerDataForAllGames(this.props.data, this.props.field, this.props.N)

        // TODO: tweak to show pictures in bar by tweaking the label component, like this: http://recharts.org/#/en-US/api/Label
        return (
            <>
                <h2>Top {this.props.N} {this.props.field}</h2>
                <ResponsiveContainer width='100%' height={this.props.height}>
                    <BarChart data={dataForChart} >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' tick={<CustomAxisTick />} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey={ this.props.field } fill='#f49542' label={<CustomBarLabel field={this.props.field}/>} />
                    </BarChart>
                </ResponsiveContainer>
            </>
        )
    }
}