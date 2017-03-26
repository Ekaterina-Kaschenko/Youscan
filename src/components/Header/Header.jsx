import React, { PropTypes } from 'react';

import styles from './styles.css';


const propTypes = {
  children: PropTypes.element,
  search: PropTypes.element
};

const Header = ({ children, search }) => {
  return (
     <header className={ styles.header }>
      <div className={ styles.container }>
        <div className={ styles.toolbar }>
          { children }
        </div>
        {search}
      </div>
    </header>
  )
}

Header.PropTypes = propTypes;

export default Header;