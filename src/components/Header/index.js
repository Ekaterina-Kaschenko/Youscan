import React from 'react';
import styles from './styles.css';

import Logo from '../Logo';
import Filter from '../Filter';
import Search from '../Search';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles['header-left']}>
          <Logo />
          <form method="POST">
            <Filter />
          </form>
        </div>
        <Search />
      </header>
    );
  }
};
