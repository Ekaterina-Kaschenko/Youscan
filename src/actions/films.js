import * as types from '../constants/types'

export const loadFilms = () => ({
  type: types.LOAD_FILMS
})

export const loadFilmsSuccess = films => ({
  type: types.LOAD_FILMS_SUCCESS,
  payload: { films }
})

export const failure = error => ({
  type: types.ERROR,
  payload: { error }
})