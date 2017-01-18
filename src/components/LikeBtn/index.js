import React from 'react';
import styles from './styles.css';

export default class LikeBtn extends React.Component {

  render() {
    return (
      <div className={styles.like}>
        <button className={styles.btn}></button>
      </div>
    );
  }
};
