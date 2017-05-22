import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

import FilmDetailsGenre from './FilmDetailsGenres'

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    backdrop_path: PropTypes.string
  }),
  genres: PropTypes.array.isRequired,
  genre: PropTypes.string
}

const FilmDetails = ({ item, genres }) => {
  console.log(item, genres)
  return (
    <div key={item.id}
      className={styles['item-card']} >
      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles['profile__img']}>
            <img src={item.backdrop_path} alt='film' />
          </div>
          <div className={styles.rating}>
            {genres.map(genre => {
              return (
                <FilmDetailsGenre name={genre.name} id={genre.id} />
              )
            })}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.description}>{item.overview}</div>
        </div>
      </div>
    </div>
  )
}

FilmDetails.propTypes = propTypes

export default FilmDetails
