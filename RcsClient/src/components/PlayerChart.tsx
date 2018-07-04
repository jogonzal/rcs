import * as React from 'react'
import './../assets/scss/App.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { IAggregatedPlayerData } from '../stats/getAggregatedPlayerData'

type State = {
}

type Props = {
    data: IAggregatedPlayerData[]
    height: number
    width: number

}

export default class PlayerChart extends React.Component<Props, State> {
    render() {
        return (
            <BarChart width={this.props.width} height={this.props.height} data={this.props.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='goals' fill='#f49542' />
            </BarChart>
        )
    }
}