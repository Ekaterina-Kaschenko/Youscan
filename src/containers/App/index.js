import React, { Component, PropTypes } from 'react';

import Header from '../../components/Header';
import LikeBtn from '../../components/LikeBtn';
import Item from '../../components/Item';
import FilmDetails from '../../components/FilmDetails';

import '../../reset.css';
import styles from './style.css';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <div className={styles['full-row']}>
          <div className={styles.wrapper}>
            <Header />
          </div>
        </div>
        <section className={styles.wrapper + ' ' + styles.main}>
          <LikeBtn />
          <div className={styles.content}>
            <Item />
          </div>
          <FilmDetails />
        </section>
      </div>
    );
  }
}
