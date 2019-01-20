import * as React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

export class MobxAppState {
    @observable timer = 0

    constructor() {
        setInterval(() => {
            this.timer += 1
        }, 1000)
    }

    resetTimer() {
        this.timer = 0
    }
}

interface IProps {
    appState: MobxAppState
}

@observer
export class MobxTimerView extends React.Component<IProps> {
    render() {
        return (
            <div>
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <DevTools />
            </div>
        )
     }

     onReset = () => {
         this.props.appState.resetTimer()
     }
}