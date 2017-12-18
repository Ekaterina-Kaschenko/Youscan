// // Here is your default reducers content

import * as types from '../constants/types'

const initialState = {
  test: 'my test'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FILM_DETAILS: {
      return Object.assign({}, state, {
        filmDetails: action.payload.filmDetails
      })
    }

    case types.LOAD_FILMS_SUCCESS:
      return Object.assign({}, state, {

      })

    default:
      return initialState
  }
}