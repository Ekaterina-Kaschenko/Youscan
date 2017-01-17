import React from 'react';
import styles from './styles.css';

export default class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logo}>
        <img src="./logo.png" alt="logo">
      </div>
    );
  }
};
