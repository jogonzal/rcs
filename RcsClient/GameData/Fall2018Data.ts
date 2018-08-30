// tslint:disable:indent
import { IGameData } from './IGameData'

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

const summer2018Data: IGameData[] =
[
	{
        Opponent: 'The Pot',
        Date: '8/22/2018',
        GoalsInFavor: 9,
        GoalsAgainst: 3,
        Notes: '',
        PlayerStats:
        {
			MattR: { Goals: 1, Assists: 1 },
			Nimish: { Goals: 1 },
			MarkT: { Goals: 2 },
			Robert: { Goals: 1 },
			JasonR: { Goals: 1 },
			RaymondO: { Goals: 1 }
        }
    },
	{
        Opponent: 'The Pot',
        Date: '8/29/2018',
        GoalsInFavor: 4,
        GoalsAgainst: 3,
        Notes: 'We defended pretty well, except towards the end when they. The Pot had a few ringers, but we still managed to win.',
        PlayerStats:
        {
			LuisFelipe: { Goals: 1 },
			Ville: { Goals: 1 },
			JasonR: { Goals: 1 },
			DineshV: { Goals: 1 },
			AndreasH: { Assists: 1 },
			MattA: { Pitchers: 1 },
			JorgeA: { Pitchers: 1 },
			MattR: { Pitchers: 1 }
        }
    },
]

export default summer2018Data