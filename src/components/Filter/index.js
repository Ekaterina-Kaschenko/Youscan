import React from 'react';
import styles from './styles.css';

export default class Search extends React.Component {
  render() {
    return (
      <select className={styles.filter}>
        <option disabled selected value>choose filter</option>
        <option value="">text1</option>
        <option value="">text2</option>
        <option value="">text3</option>
      </select>
    );
  }
};
