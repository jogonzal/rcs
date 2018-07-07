import { PlayerName } from '../../GameData/IGameData'

const jorgea = require('./img/players/jorgea.png')
const unknown = require('./img/players/unknown.png')

export default class PlayerPics {
    public static GetPic(player: PlayerName) {
        switch (player) {
            case 'JorgeA':
                return jorgea
            case 'AndreasH':
            case 'ChrisB':
            case 'DiegoV':
            case 'DineshV':
            case 'JordanH':
            case 'JasonR':
            case 'JorgeM':
            case 'MarkT':
            case 'MartinM':
            case 'MattA':
            case 'MattMC':
            case 'MattR':
            case 'NicoS':
            case 'RaymondO':
            case 'ScottO':
            case 'UmairA':
            case 'Khalef':
                return unknown
        }
    }
}