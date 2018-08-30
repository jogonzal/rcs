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
'Nimish'|
'RaymondO'|
'ScottO'|
'UmairA'|
'Ville'|
'Khalef' |
'Malte' |
'LuisFelipe' |
'Robert'

export interface IPlayerGameData {
    Goals?: number
    Assists?: number
    Comment?: string
    Pitchers?: number
    BlueCards?: number
}

export interface IGameData {
    Opponent: string
    Date: string
    GoalsInFavor: number
    GoalsAgainst: number
    Notes: string
    PlayerStats: { [key in PlayerName]?: IPlayerGameData }
}