import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Header from '../../components/Header';
import LikeBtn from '../../components/LikeBtn';
import ItemContainer from '../ItemContainer';
import FilmDetails from '../../components/FilmDetails';

import '../../reset.css';
import styles from './style.css';

const propTypes = {
  children: React.PropTypes.element
};

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles['full-row']}>
          <div className={styles.wrapper}>
            <Header />
          </div>
        </div>
        <section className={classNames (styles.wrapper, styles.main) }>
          <LikeBtn />
          <div className={styles.content}>
            <ItemContainer />
          </div>
        </section>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

// export default App;
