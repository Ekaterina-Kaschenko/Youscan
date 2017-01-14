import React, { Component, PropTypes } from 'react';

import Search from '../../components/Search';
import FavouriteFilm from '../../components/FavouriteFilm';
import Item from '../../components/Item';

import styles from './style.css';

export default class App extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Search />
          <Item />
        </div>
  			<div className={styles.right}>
          <FavouriteFilm />
        </div>
  		</div>
    );
  }
}
