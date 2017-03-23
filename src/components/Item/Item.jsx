import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

const propTypes = {
  films: React.PropTypes.array.isRequired,
  film: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    backdrop_path: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  })
}

const Item = ({ films }) => {
  return (
    <div className={ styles['search_list'] }>
        {films.map(film => {
        return (
            <Link to={ `/details/${film.id}` } 
            className= { styles['search_list-item'] }
            key={ film.id } >
              <img src={ film.backdrop_path } alt='film' />
              <h3 className={ styles.title }>{ film.title }</h3>
            </Link>
        );
      })}
    </div>
  )
};

Item.propTypes = propTypes;

export default Item;