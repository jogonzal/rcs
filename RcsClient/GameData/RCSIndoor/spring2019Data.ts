// tslint:disable:indent
import { IGameData } from '../IGameData'

// {
// 	Opponent: 'COPYPASTETHISONE',
// 	Date: '4/11/2018',
// 	GoalsInFavor: 0,
// 	GoalsAgainst: 0,
// 	Notes: 'THIS IS OPTIONAL',
// 	PlayerStats:
// 	{
// 		AndreasH: { 'Goals': 0, 'Assists': 0 },
// 		ChrisB: { 'Goals': 0, 'Assists': 0 },
// 		DiegoV: { 'Goals': 0, 'Assists': 0 },
// 		DineshV: { 'Goals': 0, 'Assists': 0 },
// 		JordanH: { 'Goals': 0, 'Assists': 0 },
// 		JasonR: { 'Goals': 0, 'Assists': 0 },
// 		JorgeA: { 'Goals': 0, 'Assists': 0 },
// 		JorgeM: { 'Goals': 0, 'Assists': 0 },
// 		MarkT: { 'Goals': 0, 'Assists': 0 },
// 		MartinM: { 'Goals': 0, 'Assists': 0 },
// 		MattA: { 'Goals': 0, 'Assists': 0 },
// 		MattMC: { 'Goals': 0, 'Assists': 0 },
// 		MattR: { 'Goals': 0, 'Assists': 0 },
// 		NicoS: { 'Goals': 0, 'Assists': 0 },
// 		RaymondO: { 'Goals': 0, 'Assists': 0 },
// 		ScottO: { 'Goals': 0, 'Assists': 0 },
// 		UmairA: { 'Goals': 0, 'Assists': 0 }
// 		Nimish: { 'Goals': 0, 'Assists': 0 }
// 	}
// },

const spring2019Data: IGameData[] =
[
	{
        opponent: 'Turn 10',
        date: '4/10/2018',
        goalsInFavor: 5,
        goalsAgainst: 2,
        notes: 'Good game, tough opponent',
        playerStats:
        {
            Alex: { Goals: 1 },
            JorgeA: { Assists: 1, Pitchers: 1 },
            MartinM: { Goals: 2, Pitchers: 1 },
            MarkT: { Goals: 2 },
            Nimish: { Assists: 1 },
        },
        partitionKey: '',
        rowKey: '',
    },
]

export default spring2019Data