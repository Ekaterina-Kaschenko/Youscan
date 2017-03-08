import React from 'react';
import styles from './styles.css';

import SearchContainer from '../../containers/SearchContainer';

const propTypes = {
  children: React.PropTypes.element.isRequired
};

const HeaderInner = (props) => {
  return (
    <header className={styles.header}>
      {props.children}
      <SearchContainer />
    </header>
  );
};

HeaderInner.propTypes = propTypes;

export default HeaderInner;