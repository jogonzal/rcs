import * as React from 'react'
import PlayerPics from '../assets/PlayerPics'

const CustomAxisTick = (props) => {
    const { x, y, payload, width } = props

    const playerName = payload.value

    const pictureUrl = PlayerPics.GetPic(playerName)

    const sizeOfImage = 40
    return <image xlink:href={pictureUrl}
        height={sizeOfImage} width={sizeOfImage}
        x={x - sizeOfImage / 2} y={y - 12} />
    
    // return (
    //     <svg x={x - 12} y={y + 4} width={24} height={24} viewBox='0 0 1024 1024' fill='#666'>
    //         <path d={path} />
    //     </svg>
    // )
}

export default CustomAxisTick