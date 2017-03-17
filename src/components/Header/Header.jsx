import React from 'react';

import styles from './styles.css';


const propTypes = {
  children: React.PropTypes.element,
  search: React.PropTypes.element
};

const Header = ({ children, search }) => {
  return (
     <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          {children}
        </div>
        {search}
      </div>
    </header>
  )
}

Header.PropTypes = propTypes;

export default Header;