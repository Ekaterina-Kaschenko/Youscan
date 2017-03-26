import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

const propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

const Item = ({ film }) => {
  return (
    <Link
      to={ `/details/${film.id}` } 
      className= { styles['list-item'] }
      key={ film.id }>
      <img src={ film.backdrop_path } alt='film' />
      <h3 className={ styles.title }>{ film.title }</h3>
    </Link>
  )
};

Item.propTypes = propTypes;

export default Item;