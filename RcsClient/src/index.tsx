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
import BabelTest from './components/BabelTest'
import NotImplemented from './components/NotImplemented'
import { TodoList } from './components/TodoList'

import '@babel/polyfill'

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
      <Route exact path='/babelTest' component={BabelTest} />
      <Route exact path='/signin' component={NotImplemented} />
      <Route exact path='/todos' component={TodoList} />

    </div>
  </HashRouter>,
  rootEl
)

// Dynamic import example
const delayLoadedImport = import('./logSomeStuff')
delayLoadedImport.then(func => {
  func.default()
})