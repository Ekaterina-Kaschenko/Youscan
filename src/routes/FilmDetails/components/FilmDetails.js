import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as filmsActions from '../../../actions/films'

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
  componentDidMount() {
    this.props.loadFilmDetails(this.props.params.id)
  }


  componentWillUpdate(nextProps, nextState) {
    // for searching: if we change route id - changes all content
    if (this.props.params.id !== nextProps.params.id) {
      this.props.loadFilmDetails(nextProps.params.id)
    }
  }

  render() {
    const { film } = this.props;
    console.log('film', film)


    return (
      <div>{ film &&
        <div key={film.id}
          className={styles['item-card']} >
          <h3 className={styles.title}>{ film.title }</h3>
          <div className={styles.content}>
            <div className={styles.profile}>
              <div className={styles['profile__img']}>
                <img src={film.backdrop_path} alt='film' />
              </div>
              <div className={styles.rating}>
                {film.genres.map(genre => {
                  return (
                    <FilmDetailsGenre name={genre.name} id={genre.id} key={genre.id} />
                  )
                })}
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.description}>{ film.overview }</div>
            </div>
          </div>
        </div>
      }</div>
    )
  }

}

// FilmDetails.propTypes = propTypes


export default connect(
  state => ({
    film: state.films.film
  }),
  dispatch => bindActionCreators(filmsActions, dispatch)
)(FilmDetails)





