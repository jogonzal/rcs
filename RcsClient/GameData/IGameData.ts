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
'Robert' |
'Mahmoud' |
'Colton' |
'Alex'

export interface IPlayerGameData {
    Goals?: number
    Assists?: number
    Comment?: string
    Pitchers?: number
    BlueCards?: number
    CleanSheets?: number
}

export interface IGameData {
    opponent: string
    date: string
    goalsInFavor: number
    goalsAgainst: number
    notes: string
    playerStats: { [key in PlayerName]?: IPlayerGameData }
    rowKey: string
    partitionKey: string
}

export interface IGameDataForApi extends IGameData {
  serializedPlayerStats: string
}