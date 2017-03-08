import React from 'react';

import styles from './styles.css';

import Logo from './Logo';
import HeaderInner from './HeaderInner';
import FilterContainer from '../../containers/FilterContainer';

const Header = () => {
  return (
    <HeaderInner>
      <div className={styles['header-left']}>
        <Logo />
        <FilterContainer />
      </div>
    </HeaderInner>
  )
}

export default Header;