import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

export default class AppContainer extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}> 
        <Router history={browserHistory} children={this.props.routes} /> 
      </div>
    )
  }
}