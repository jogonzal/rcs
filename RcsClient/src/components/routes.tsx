import * as React from 'react'
import TeamStats from './TeamStats'
import Tasks from './Tasks'
import RawData from './RawData'
import SampleApp from './SampleApp'
// import HomePage from './HomePage'
import rcsIndoorSeasons from '../stats/rcsIndoorSeasons'
import rcsOutdoorSeasons from '../stats/rcsOutdoorSeasons'

const routes = [
  { path: '/', action: () => <TeamStats teamName='RCS indoor' teamSeasons={rcsIndoorSeasons} />},
  { path: '/rcsindoor', action: () => <TeamStats teamName='RCS indoor' teamSeasons={rcsIndoorSeasons} />},
  { path: '/rcsoutdoor', action: () => <TeamStats teamName='RCS outdoor' teamSeasons={rcsOutdoorSeasons} />},
  { path: '/tasks', action: () => <Tasks /> },
  { path: '/rawdata', action: () => <RawData /> },
  { path: '/sampleapp', action: () => <SampleApp /> },
  { path: '/otherThing', action: () => <p>otherThing</p> },
  { path: '/tasks/:id', action: () => <p>Specific task</p> }
]

export default routes