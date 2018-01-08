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
      debugger
      const films = action.payload.films.results.map(film => {
          // "w92", "w154", "w185", "w342", "w500", "w780", or "original"
          film.backdrop_path = 'http://image.tmdb.org/t/p/w342' + film.backdrop_path
          film.poster_path = 'http://image.tmdb.org/t/p/w342' + film.poster_path
          return film
        })
      
      return Object.assign({}, state, {
        films
      })
    }
    case types.LOAD_FILM_DETAILS:
      return Object.assign({}, state, {
        film: null // for clearing previous film
      })
      
    case types.LOAD_FILM_DETAILS_SUCCESS: {
      const film = action.payload.film

      film.backdrop_path = 'http://image.tmdb.org/t/p/w342' + film.backdrop_path
      film.poster_path = 'http://image.tmdb.org/t/p/w342' + film.poster_path

      return Object.assign({}, state, {
        film
      })
    }
    case types.LOAD_GENRES_SUCCESS:
      return Object.assign({}, state, {
        genres: action.payload.genres.genres
      })

    case types.SEARCH_FILMS_SUCCESS:
      return Object.assign({}, state, {
        searchResults: action.payload.films.results
      })

    case types.ERROR:
      return Object.assign({}, state, {
        error: action.payload.error.toString()
      })

    default:
      return state
  }
}