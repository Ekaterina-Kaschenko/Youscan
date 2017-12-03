import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

import FilmDetailsGenre from './FilmDetailsGenres'

// const propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.number,
//     backdrop_path: PropTypes.string
//   }),
//   genres: PropTypes.array.isRequired,
//   genre: PropTypes.string
// }


class FilmDetails extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/movie/${this.props.params.id}?api_key=3f04510390c8d68dba128013d0013351&language=en-US`
    return fetch (url)
      .then(r => {
        return r.json()
      })
      .then(film => {
        film.backdrop_path = 'http://image.tmdb.org/t/p/w342' + film.backdrop_path
        film.poster_path = 'http://image.tmdb.org/t/p/w342' + film.poster_path
        return film
      })
      .then(film => {
        console.log(film)
        this.setState(() => ({  data: film  }))
      })
  }

  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div>{ data &&

        <div key={data.id}
          className={styles['item-card']} >
          <h3 className={styles.title}>{ data.title }</h3>
          <div className={styles.content}>
            <div className={styles.profile}>
              <div className={styles['profile__img']}>
                <img src={data.backdrop_path} alt='film' />
              </div>
              <div className={styles.rating}>
                {data.genres.map(genre => {
                  return (
                    <FilmDetailsGenre name={genre.name} id={genre.id} />
                  )
                })}
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.description}>{ data.overview }</div>
            </div>
          </div>
        </div>
      }</div>
    )
  }
  
}

// FilmDetails.propTypes = propTypes

export default FilmDetails




   