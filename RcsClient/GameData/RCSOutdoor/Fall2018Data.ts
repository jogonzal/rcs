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

const fall2018Data: IGameData[] =
[
	{
        opponent: 'Scorpionissimi',
        date: '8/25/2018',
        goalsInFavor: 0,
        goalsAgainst: 1,
        notes: 'Goal was caused by bad defending by Jorge and Dinesh, but they did have a few other chances also due to bad defending. They missed a penalty and we missed all of our opportunities, though we had a few good shots.',
        playerStats:
        {
        }
    },
	{
        opponent: '.NET',
        date: '8/31/2018',
        goalsInFavor: 2,
        goalsAgainst: 2,
        notes: 'Goal was caused by bad defending by Jorge and Dinesh, but they did have a few other chances also due to bad defending. They missed a penalty and we missed all of our opportunities, though we had a few good shots.',
        playerStats:
        {
            Mahmoud: { Goals: 2 },
            MattMC: { Assists: 1 }
        }
    },
	{
        opponent: 'Stone',
        date: '09/04/2018',
        goalsInFavor: 2,
        goalsAgainst: 0,
        notes: '',
        playerStats:
        {
            Mahmoud: { Goals: 1 },
            Colton: { Goals: 1 },
            MattMC: { Assists: 1 },
            MarkT: { Assists: 1 }
        }
    }
]

export default fall2018Data