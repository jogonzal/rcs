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

const summer2018Data: IGameData[] =
[
    {
        opponent: 'The Pot',
        date: '7/11/2018',
        goalsInFavor: 4,
        goalsAgainst: 6,
        notes: 'This is the second game we lose against the Pot - they have a strong indoor team - Josh and Carlos have speed and they got us on many counters. Next time we should focus on finishing our plays and not push all of our players to their side of the field.',
        playerStats:
        {
            ChrisB: { Assists: 1 },
            DiegoV: { 'Assists': 1 },
            DineshV: { 'Goals': 1 },
            JorgeA: { 'Goals': 1 },
            MarkT: { 'Goals': 1, 'Assists': 2 },
            MattR: { 'Pitchers': 1 },
            ScottO: { },
            UmairA: { 'Goals': 1 },
            RaymondO: { 'Pitchers': 1 },
            Nimish: { }
        }
    },
    {
        opponent: 'Costco team in Issaquah',
        date: '7/25/2018',
        goalsInFavor: 11,
        goalsAgainst: 4,
        notes: 'We played well and were better than them - Mark, Malte especially had a great game.',
        playerStats:
        {
            Malte: { 'Assists': 2, 'Goals': 3 },
            DiegoV: { 'Assists': 1, 'Goals': 1 },
            DineshV: { 'Goals': 1, 'Assists': 1 },
            JorgeA: { 'Goals': 2, 'Pitchers': 2 },
            MarkT: { 'Goals': 2, 'Assists': 2 },
            MattR: { 'Pitchers': 1, 'Assists': 3 },
            UmairA: { 'Goals': 1, 'Assists': 2 },
            Nimish: { },
            MartinM: { },
            JasonR: { 'Assists': 1 }
        }
    },
    {
        opponent: 'NSI',
        date: '8/1/2018',
        goalsInFavor: 1,
        goalsAgainst: 2,
        notes: 'We overcommitted on offense and got countered many times. We struggled to finish our plays on offense.',
        playerStats:
        {
            DiegoV: {},
            JorgeA: {},
            DineshV: { 'Goals': 1 },
            MattR: { 'Pitchers': 1 },
            UmairA: {},
            Nimish: { },
            JasonR: {},
            RaymondO: {},
            ChrisB: { Assists: 1 },
            MarkT: {}
        }
    },
    {
        opponent: 'Dacii',
        date: '8/1/2018',
        goalsInFavor: 6,
        goalsAgainst: 4,
        notes: 'We played well, but got countered many times 2v1. We were a bit lucky on those.',
        playerStats:
        {
            DiegoV: { Goals: 1 },
            JorgeA: { Goals: 2 },
            DineshV: { Goals: 1 },
            MattR: { Assists: 1 },
            UmairA: { Assists: 1 },
            Nimish: { Assists: 1 },
            JasonR: { Goals: 1 },
            RaymondO: { Assists: 2 },
            ChrisB: { Assists: 1 },
            MarkT: { Assists: 1, Goals: 1 }
        }
    },
    {
        opponent: 'Yugo',
        date: '8/9/2018',
        goalsInFavor: 7,
        goalsAgainst: 7,
        notes: 'We did not defend well, but showed great spirit and came back from a 4-7.',
        playerStats:
        {
            DiegoV: { Goals: 1 },
            JorgeA: { Goals: 2, Assists: 1 },
            JasonR: { Goals: 1 },
            Ville: { Assists: 1 },
            Nimish: { Assists: 1, Pitchers: 1 },
            UmairA: { Assists: 2 },
            DineshV: { BlueCards: 1, Pitchers: 1, Assists: 1 },
            MattR: { Goals: 1, Assists: 1 },
            MarkT: { Goals: 2, Assists: 1 }
        }
    },
    {
        opponent: 'Torpedo Gopota',
        date: '8/15/2018',
        goalsInFavor: 4,
        goalsAgainst: 6,
        notes: '',
        playerStats:
        {
            Ville: { Goals: 1, Pitchers: 1 },
            MattR: { Assists: 1 },
            MarkT: { Goals: 1 },
            ChrisB: { Assists: 1 },
            AndreasH: { Goals: 1 }
        }
    }
]

export default summer2018Data