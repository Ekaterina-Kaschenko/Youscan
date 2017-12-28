import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store'

export default class AppContainer extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} children={this.props.routes} />
      </Provider>
    )
  }
}
