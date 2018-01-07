import * as ActionTypes from '../../src/constants/types'
import filmsReducers, { initialState } from '../../src/reducers/films'

describe('Application reducer', () => {
  it('should load films on LOAD_FILMS_SUCCESS action', () => {
    const film = {
      name: 'Home Along',
      genres: 'Family',
      backdrop_path: 'backdrop_path',
      poster_path: 'poster_path'
    }

    const films = {
      results: [ film ]
    }

    const action = {
      type: ActionTypes.LOAD_FILMS_SUCCESS,
      payload: {
        films
      }
    }

    const mutated = filmsReducers(initialState, action)

    expect(mutated).toHaveProperty('films', [film])

  })

  it('should load genres on LOAD_GENRE_FILMS_SUCCESS action', () => {
    const film = {
      name: 'Home Along',
      genres: 'Family',
      backdrop_path: 'backdrop_path',
      poster_path: 'poster_path'
    }

    const expectedResult = [{
      name: 'Home Along',
      genres: 'Family',
      backdrop_path: 'http://image.tmdb.org/t/p/w342backdrop_path',
      poster_path: 'http://image.tmdb.org/t/p/w342poster_path'
    }]

    const films = {
      results: [ film ]
    }

    const action = {
      type: ActionTypes.LOAD_GENRE_FILMS_SUCCESS,
      payload: {
        films
      }
    }

    const mutated = filmsReducers(initialState, action)

    expect(mutated).toHaveProperty('films', expectedResult)
  })

  it('should load genres on LOAD_FILM_DETAILS action', () => {
    const id = 11111
    const action = {
      type: ActionTypes.LOAD_FILM_DETAILS,
      payload: { id }
    }

    const mutated = filmsReducers(initialState, action)

    expect(mutated).toHaveProperty('film', null)
  })

  it('should load genres on LOAD_FILM_DETAILS_SUCCESS action', () => {
    const film = {
      name: 'Home Along',
      genres: 'Family'
    }
    const action = {
      type: ActionTypes.LOAD_FILM_DETAILS_SUCCESS,
      payload: { film }
    }

    const mutated = filmsReducers(initialState, action)

    expect(mutated).toHaveProperty('film', film)
  })

  it('should load genres on LOAD_GENRES_SUCCESS action', () => {
     const genres = {
      genres: ['Drama', 'Comedy', 'History']
    }
     
     const action = {
      type: ActionTypes.LOAD_GENRES_SUCCESS,
      payload: { genres }
    }

    const mutated = filmsReducers(initialState, action)

    expect(mutated).toHaveProperty('genres', genres.genres)
  })

   it('should load genres on SEARCH_FILMS_SUCCESS action', () => {
      const film = {
      name: 'Home Along',
      genres: 'Family',
      backdrop_path: 'backdrop_path',
      poster_path: 'poster_path'
    }

    const films = {
      results: [ film ]
    }

     const action = {
      type: ActionTypes.SEARCH_FILMS_SUCCESS,
      payload: { films }
    }

    const mutated = filmsReducers(initialState, action)
    
    expect(mutated).toHaveProperty('searchResults', [ film ])
  })

  it('should load genres on ERROR action', () => {
    const error = 'ERROR'
     const action = {
      type: ActionTypes.ERROR,
      payload: { error }
    }

    const mutated = filmsReducers(initialState, action)
    expect(mutated).toHaveProperty('error', error)
  })
})