import React from 'react';

import styles from './styles.css';

import Logo from '../Logo';
import FilterContainer from '../../containers/FilterContainer';
import SearchContainer from '../../containers/SearchContainer';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <Logo />
        <FilterContainer />
      </div>
      <SearchContainer />
    </header>
  );
};

export default Header;