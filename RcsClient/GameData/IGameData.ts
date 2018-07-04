export type PlayerName = 'AndreasH' |
'ChrisB'|
'DiegoV'|
'DineshV'|
'JordanH'|
'JasonR'|
'JorgeA'|
'JorgeM'|
'MarkT'|
'MartinM'|
'MattA'|
'MattMC'|
'MattR'|
'NicoS'|
'RaymondO'|
'ScottO'|
'UmairA'|
'Khalef'

export interface IPlayerGameData {
    Goals: number
    Assists: number
    Comment?: string
}

export interface IGameData {
    Opponent: string
    Date: string
    GoalsInFavor: number
    GoalsAgainst: number
    Notes: string
    PlayerStats: { [key in PlayerName]?: IPlayerGameData }
}