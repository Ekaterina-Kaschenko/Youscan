import * as types from '../constants/types'

export const loadFilms = () => ({
  type: types.LOAD_FILMS
})

export const loadFilmsSuccess = films => ({
  type: types.LOAD_FILMS_SUCCESS,
  payload: { films }
})

export const loadFilmDetails = id => ({
  type: types.LOAD_FILM_DETAILS,
  payload: { id }
})

export const loadFilmDetailsSuccess = film => ({
  type: types.LOAD_FILM_DETAILS_SUCCESS,
  payload: { film }
})

export const loadGenres = () => ({
  type: types.LOAD_GENRES
})

export const loadGenresSuccess = genres => ({
  type: types.LOAD_GENRES_SUCCESS,
  payload: { genres }
})

export const loadGenreFilms = (genreId) => ({
  type: types.LOAD_GENRE_FILMS,
  payload: { genreId }
})

export const loadGenreFilmsSuccess = films => ({
  type: types.LOAD_GENRE_FILMS_SUCCESS,
  payload: { films }
})


export const searchFilms = (query) => ({
  type: types.SEARCH_FILMS,
  payload: { query }
})

export const searchFilmsSuccess = films => ({
  type: types.SEARCH_FILMS_SUCCESS,
  payload: { films }
})

export const failure = error => ({
  type: types.ERROR,
  payload: { error }
})