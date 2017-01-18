import React from 'react';
import styles from './styles.css';

export default class Item extends React.Component {

  render() {
    return (
      <li className={styles.item + ' ' + styles.tile}>
        <img src='/IMG_7057.JPG' alt='film' />
        <h3 className={styles.name}>Film name</h3>
      </li>
    );
  }
};
