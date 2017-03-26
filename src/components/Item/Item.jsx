import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
}

const Item = ({ item: { id, backdrop_path, title } }) => {
  return (
    <Link
      to={ `/details/${id}` } 
      className= { styles['list-item'] }
      key={ id }>
      <img src={ backdrop_path } alt='film' />
      <h3 className={ styles.title }>{ title }</h3>
    </Link>
  )
};

Item.propTypes = propTypes;

export default Item;