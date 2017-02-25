import React from 'react';
import styles from './styles.css';

const Logo = () => {
  return (
    <a className={styles.logo}>
      <img src='./logo.png' alt='logo' />
    </a>
  );
};

export default Logo;