import * as React from 'react'
import { PureComponent } from 'react'

export type Props = {
}
export type State = {
}

export default class BabelTest extends PureComponent<Props, State> {
  render() {
    const myElement = {
      prop1: 1,
      prop2: 2,
      prop3: 3
    }
    const myElement2 = {
      ...myElement
    }
    console.log(myElement2)
    return (
      <div>
        <p>Jorge!!</p>
      </div>
    )
  }
}