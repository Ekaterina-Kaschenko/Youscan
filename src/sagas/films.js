import es6promise from 'es6-promise'
import { all, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/films'
import * as types from '../constants/types'

import api from '../utiles/api'

es6promise.polyfill()

export function * loadFilms() {
  try {
    const films = yield api.getPopularFilms()
    yield put(actions.loadFilmsSuccess(films))
  } catch (error) {
    yield put(actions.failure(error))
  }
}

export default function * filmsSaga () {
  yield all([
    takeEvery(types.LOAD_FILMS, loadFilms)
  ])
}
