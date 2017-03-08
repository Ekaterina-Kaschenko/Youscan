import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import classNames from 'classnames';
import styles from './styles.css';

const propTypes = {
  films: PropTypes.array.isRequired
}

const Item = (props) => {
  return (
    <ul className={styles.list}>
        {props.films.map(film => {
        return (
            <Link to={`/details/${film.id}`} 
            className= { classNames( styles.item, styles.tile ) }
            key={film.id} >
            <li>
                <img src={film.backdrop_path} alt='film' />
                <h3 className={styles.name}>{film.title}</h3>
            </li>
            </Link>
        );
      })}
    </ul>
  )
};

Item.propTypes = propTypes;

export default Item;