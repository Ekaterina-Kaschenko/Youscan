// // Here is your default reducers content

import * as types from '../constants/types'

const initialState = {
  films: [],
  error: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FILMS_SUCCESS:
      return Object.assign({}, state, {
        films: action.payload.films
      })

    case types.ERROR:
      return Object.assign({}, state, {
        error: action.payload.error
      })

    default:
      return initialState
  }
}