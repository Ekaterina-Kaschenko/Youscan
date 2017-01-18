import React, { Component, PropTypes } from 'react';

import Header from '../../components/Header';
import LikeBtn from '../../components/LikeBtn';
import Item from '../../components/Item';

import '../../reset.css';
import styles from './style.css';

export default class App extends Component {
  items = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    }
  ]
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <div className={styles['full-row']}>
          <div className={styles.wrapper}>
            <Header />
          </div>
        </div>
        <section className={styles.wrapper + ' ' + styles.main}>
          <LikeBtn />
          <div className={styles.content}>
            <ul className={styles.list}>
              {this.items.map(item => {
                return <Item />
              }, this)}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
