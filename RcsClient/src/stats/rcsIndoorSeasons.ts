import { IGameData } from '../../GameData/IGameData'

// import spring2018Data from '../../GameData/Spring2018Data'
import summer2018Data from '../../GameData/rcsIndoor/Summer2018Data'
import fall2018Data from '../../GameData/rcsIndoor/Fall2018Data'

const availableSeasons: { [key: string]: IGameData[] } = {
  'Fall 2018' : fall2018Data,
  'Summer 2018': summer2018Data,
  // 'Spring 2018': spring2018Data, Data for this one is innacurate
}

export default availableSeasons