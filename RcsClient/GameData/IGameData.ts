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
'Alex' |
'SamyBoshra' |
'Ahmed' |
'Mina' |
'Ivan' |
'Neil' |
'Ayman'

export const PlayerNames: { [key in PlayerName]: string } = {
  Alex: 'Alejandro Gonzalez',
  AndreasH: 'Andreas Hart',
  ChrisB: 'Chris Bohm',
  Colton: 'Colton',
  DiegoV: 'Diego',
  DineshV: 'Dinesh',
  JasonR: 'Jason Ryder',
  JordanH: 'Jordan Hoffman',
  JorgeA: 'Jorge Aguirre',
  JorgeM: 'Jorge Mata',
  Khalef: 'Khalef',
  LuisFelipe: 'Luis Felipe',
  Mahmoud: 'Mahmoud',
  Malte: 'Malte',
  MarkT: 'Mark Traverso',
  MartinM: 'Martin Moreno',
  MattA: 'Matt Ashman',
  MattMC: 'Matt McSpirit',
  MattR: 'Matt Ryder',
  NicoS: 'Nicolas',
  Nimish: 'Nimish',
  RaymondO: 'Raymond',
  Robert: 'Robert',
  ScottO: 'Scott Olsen',
  UmairA: 'Umair',
  Ville: 'Ville',
  Ahmed: 'Ahmed',
  Ayman: 'Ayman',
  Ivan: 'Ivan',
  Mina: 'Mina',
  Neil: 'Neil',
  SamyBoshra: 'Samy Boshra',
}

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