import {
  createStore,
  applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { loadFilms } from '../sagas/loadFilmDetails'
import rootReducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(loadFilms)

export default store
