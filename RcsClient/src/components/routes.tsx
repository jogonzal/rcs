import * as React from 'react'
import App from './App'
import Tasks from './Tasks'
import RawData from './RawData'
import SampleApp from './SampleApp'

const routes = [
  { path: '/', action: () => <App />},
  { path: '/tasks', action: () => <Tasks /> },
  { path: '/rawdata', action: () => <RawData /> },
  { path: '/sampleapp', action: () => <SampleApp /> },
  { path: '/otherThing', action: () => <p>otherThing</p> },
  { path: '/tasks/:id', action: () => <p>Specific task</p> }
]

export default routes