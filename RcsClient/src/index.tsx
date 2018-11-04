import * as React from 'react'
import {render} from 'react-dom'
import { HashRouter, Link, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import TeamStats from './components/TeamStats'

import Tasks from './components/Tasks'
import RawData from './components/RawData'
import SampleApp from './components/SampleApp'
import rcsIndoorSeasons from './stats/rcsIndoorSeasons'
import rcsOutdoorSeasons from './stats/rcsOutdoorSeasons'

const rootEl = document.getElementById('root')

render(
  <HashRouter>
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/rcsindoor' render={() => <TeamStats teamName='RCS indoor' teamSeasons={rcsIndoorSeasons} />} />
      <Route exact path='/rcsoutdoor' render={() => <TeamStats teamName='RCS outdoor' teamSeasons={rcsOutdoorSeasons} />} />
      <Route exact path='/tasks' component={Tasks} />
      <Route exact path='/sampleApp' component={SampleApp} />
      <Route exact path='/rawData' component={RawData} />

    </div>
  </HashRouter>,
  rootEl
)