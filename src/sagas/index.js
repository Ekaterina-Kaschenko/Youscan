import { fork, all } from 'redux-saga/effects'

import filmsSaga from './films'

export default function * rootSaga () {
  yield all([
    fork(filmsSaga)
  ])
}
