import React, { PropTypes } from 'react';
import styles from './styles.css';

import FilmDetailsGenre from './FilmDetailsGenres';

const propTypes = {
  film: React.PropTypes.shape({
    id: React.PropTypes.number,
    backdrop_path: React.PropTypes.string
  }),
  genres: React.PropTypes.array.isRequired,
  genre: React.PropTypes.string
}

const FilmDetails = ({ film, genres }) => {
  console.log(film, genres);
  return (
    <div key={ film.id } 
          className={ styles['item-card'] } >
      <h3 className={ styles.title }>{ film.title }</h3>
        <div className={ styles.content }>
        <div className={ styles.profile }>
          <div className={ styles['profile__img'] }>
            <img src={ film.backdrop_path } alt='film' />
          </div>
          <div className={ styles.rating }>
            {genres.map(genre => {
              return (
                <FilmDetailsGenre name={ genre.name } id={ genre.id } />
              )
            })}
          </div>
        </div>
        <div className={ styles.info }>
          <div className={ styles.description }>{ film.overview }</div>
        </div>
      </div>
    </div>
  );
}

FilmDetails.propTypes = propTypes;

export default FilmDetails;