import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import classNames from 'classnames';
import styles from './styles.css';

const propTypes = {
  films: PropTypes.array.isRequired
}

const Item = ( props ) => {
  return (
    <div className={ styles['search_list'] }>
        {props.films.map(film => {
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