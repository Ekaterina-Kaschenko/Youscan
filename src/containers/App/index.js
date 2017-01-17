import React, { Component, PropTypes } from 'react';

import Header from '../../components/Header';

import styles from './style.css';

export default class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="full-row">
        <div className="wrapper">
          <Header />
        </div>
      </div>
    );
  }
}
