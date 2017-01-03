import React, { Component, PropTypes } from 'react';

import Header from '../../components/Header';

import styles from './style.css';

console.log(styles);

class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className={styles.test}>
        <Header />
        Test
      </div>
    );
  }
}

export default App;
