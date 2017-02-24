import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

const Item = (props) => {
  return (
    <ul className={styles.list}>
        {props.films.map(film => {
        return (
            <Link to={`/details/${film.id}`} 
            className={styles.item + ' ' + styles.tile} 
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

export default Item;