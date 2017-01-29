import React from 'react';
import styles from './styles.css';

import Logo from '../Logo';
import Filter from '../Filter';
import Search from '../Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <Logo />
        <Filter />
      </div>
      <Search />
    </header>
  );
};

export default Header;