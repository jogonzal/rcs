import { IGameData } from '../../GameData/IGameData'

// import spring2018Data from '../../GameData/Spring2018Data'
import summer2018Data from '../../GameData/Summer2018Data'

const availableSeasons: { [key: string]: IGameData[] } = {
  // 'Spring 2018': spring2018Data, Data for this one is innacurate
  'Summer 2018': summer2018Data
}

export default availableSeasons