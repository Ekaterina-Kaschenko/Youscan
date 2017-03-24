import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

const propTypes = {
  children: React.PropTypes.element
}

const Grid = ({children}) => {
  return (
    <div className={ styles.content }>
      {children}
    </div>
  )
};

Grid.propTypes = propTypes;

export default Grid;