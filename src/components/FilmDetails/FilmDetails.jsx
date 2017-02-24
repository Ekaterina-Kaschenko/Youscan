import React, { PropTypes } from 'react';
import styles from './styles.css';

import FilmDetailsGenre from './FilmDetailsGenres';

const propTypes = {
  film: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired
}

const FilmDetails = ({ film, genres }) => {
  console.log(film, genres);
  return (
    <div key={film.id} 
          className={styles['item-card']} >
      <h3 className={styles.title}>{film.title}</h3>
        <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles['profile__img']}>
            <img src={ film.backdrop_path} alt='film' />
          </div>
          <div className={styles.rating}>
            {genres.map(genre => {
              return (
                <FilmDetailsGenre genre={genre} />
              )
            })}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.description}>{ film.overview}</div>
        </div>
      </div>
    </div>
  );
}

FilmDetails.propTypes = propTypes;

export default FilmDetails;