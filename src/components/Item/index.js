import React, { Component, PropTypes } from 'react';

import styles from './styles.css';
import FilmImage from './IMG_7057.JPG';

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img className={styles.image} src={FilmImage} alt='film image' />
  		</div>
    );
  }
}
