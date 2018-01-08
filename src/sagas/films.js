import es6promise from 'es6-promise'
import { all, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/films'
import * as types from '../constants/types'

import api from '../utiles/api'

es6promise.polyfill()

export function * loadFilms() {
  try {
    const films = yield api.getPopularFilms()
    console.log(films)
    yield put(actions.loadFilmsSuccess(films))
  } catch (error) {
    console.log(error)
    yield put(actions.failure(error))
  }
}

export function * loadFilmDetails(action) {
  try {
    const film = yield api.getDetails(action.payload.id)
    yield put(actions.loadFilmDetailsSuccess(film))
  } catch (error) {
    yield put(actions.failure(error))
  }
}

export function * loadGenres() {
  try {
    const genres = yield api.getGenres()
    yield put(actions.loadGenresSuccess(genres))
  } catch (error) {
    yield put(actions.failure(error))
  }
}

export function * loadGenreFilms(action) {
  try {
    const films = yield api.getGenreFilms(action.payload.genreId)
    yield put(actions.loadGenreFilmsSuccess(films))
  } catch (error) {
    yield put(actions.failure(error))
  }
}

export function * searchFilm(action) {
  try {
    const films = yield api.searchFilms(action.payload.query)
    yield put(actions.searchFilmsSuccess(films))
  } catch (error) {
    yield put(actions.failure(error))
  }
}

export default function * filmsSaga () {
  yield all([
    takeEvery(types.LOAD_FILMS, loadFilms),
    takeEvery(types.LOAD_FILM_DETAILS, loadFilmDetails),
    takeEvery(types.LOAD_GENRES, loadGenres),
    takeEvery(types.LOAD_GENRE_FILMS, loadGenreFilms),
    takeEvery(types.SEARCH_FILMS, searchFilm)
  ])
}
