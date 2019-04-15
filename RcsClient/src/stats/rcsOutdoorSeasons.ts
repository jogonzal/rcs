import { IGameData } from '../../GameData/IGameData'

import fall2018Data from '../../GameData/rcsOutdoor/Fall2018Data'

export const rcsOutdoorSeasons: { [key: string]: IGameData[] } = {
  'Fall 2018' : fall2018Data
}

export const rcsOutdoorSeasonsNames = Object.keys(rcsOutdoorSeasons)