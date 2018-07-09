import * as React from 'react'
// import PlayerPics from '../assets/PlayerPics'

function CustomBarLabel(props) {
    const { payload, x, y, width, height, value, field } = props

    // NOTE: The player info isn't available here, so we can't use it
    // const sizeOfImage = 40
    // return <image xlink:href={PlayerPics.GetPic('JorgeA')}
    //     height={sizeOfImage} width={sizeOfImage}
    //     x={x + (width - sizeOfImage) / 2} y={y - sizeOfImage} />

    return <text x={x + width / 2} y={y} fill='#666' textAnchor='middle' dy={-6}>{`${value} ${field}`}</text>
}

export default CustomBarLabel