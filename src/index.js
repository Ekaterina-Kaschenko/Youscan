import ReactDOM from 'react-dom'
import React from 'react'
import createRoutes from './routes'

import AppContainer from './containers/AppContainer'
import HTML from './index.html'

const routes = createRoutes()

ReactDOM.render(
  <AppContainer routes={routes} />, document.getElementById('root')
)
