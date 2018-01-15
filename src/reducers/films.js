import * as types from '../constants/types'

export const initialState = {
  films: [],
  film: null,
  genres: [],
  searchResults: [],
  error: null
}

export default function filmsReducers (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FILMS_SUCCESS:
    case types.LOAD_GENRE_FILMS_SUCCESS: {
      return Object.assign({}, state, {
        films: action.payload.films
      })
    }
    case types.LOAD_FILM_DETAILS:
      return Object.assign({}, state, {
        film: null // for clearing previous film
      })
      
    case types.LOAD_FILM_DETAILS_SUCCESS: {
      return Object.assign({}, state, {
        film: action.payload.film
      })
    }
    case types.LOAD_GENRES_SUCCESS:
      return Object.assign({}, state, {
        genres: action.payload.genres
      })

    case types.SEARCH_FILMS_SUCCESS:
      return Object.assign({}, state, {
        searchResults: action.payload.films
      })

    case types.ERROR:
      return Object.assign({}, state, {
        error: action.payload.error // .toString()
      })

    default:
      return state
  }
}