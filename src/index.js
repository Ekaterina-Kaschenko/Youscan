import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import createRoutes from './routes'
import store from './store'

import AppContainer from './containers/AppContainer'
import HTML from './index.html'

const routes = createRoutes(store)

ReactDOM.render(
  <AppContainer routes={routes} />, document.getElementById('root')
)
