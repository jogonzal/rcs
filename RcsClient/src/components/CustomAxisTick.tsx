import * as React from 'react'
import PlayerPics from '../assets/PlayerPics'
import { getInitials } from '@uifabric/utilities'

const CustomAxisTick = (props) => {
    const { x, y, payload, width } = props

    const playerName = payload.value as string

    const pictureUrl = PlayerPics.getPicByName(playerName)

    if (pictureUrl) {

      const sizeOfImage = 40
      const myHtml = `<image xlink:href="${pictureUrl}"
          height="${sizeOfImage}" width="${sizeOfImage}"
          x="${x - sizeOfImage / 2}" y="${y - 12}" />`

      // return (
      //     <svg x={x - 12} y={y + 4} width={24} height={24} viewBox='0 0 1024 1024' fill='#666'>
      //         <path d={path} />
      //     </svg>
      // )

      return ( <g dangerouslySetInnerHTML={{__html: myHtml}}/> )
    }

    // const playerName = PlayerNames[playerKey]
    const initials = getInitials(playerName, false, false)

    const sizeOfImage = 40
    const myHtml = `<text
        height="${sizeOfImage}" width="${sizeOfImage}"
        x="${x - sizeOfImage / 2 + 12}" y="${y + 12}">${initials}</text>`

    // return (
    //     <svg x={x - 12} y={y + 4} width={24} height={24} viewBox='0 0 1024 1024' fill='#666'>
    //         <path d={path} />
    //     </svg>
    // )

    return ( <g dangerouslySetInnerHTML={{__html: myHtml}}/> )
  }

export default CustomAxisTick