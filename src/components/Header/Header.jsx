import React from 'react';

import styles from './styles.css';


const propTypes = {
  children: React.PropTypes.element.isRequired,
  search: React.PropTypes.object.isRequired
};

const Header = ({ children, search }) => {
  return (
     <header className={styles.header}>
      <div className={styles['header-left']}>
        {children}
      </div>
      {search}
    </header>
  )
}

Header.PropTypes = propTypes;

export default Header;