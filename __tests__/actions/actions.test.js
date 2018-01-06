import * as filmActions from '../../src/actions/films'

describe('Film actions', () => {
  it('should return correct action object when call loadFilms', () => {
    const action = filmActions.loadFilms()
    expect(action).toEqual({ type: 'LOAD_FILMS' })
  })

  it('should return correct action object when call loadFilmsSuccess', () => {
    const films = [{
      name: 'Home Along',
      genres: 'Family'
    }]
    const action = filmActions.loadFilmsSuccess(films)
    expect(action).toEqual({
      type: 'LOAD_FILMS_SUCCESS',
      payload: {
        films
      }
    })
  })

  it('should return correct action object when call loadFilmDetails', () => {
    const id = 1000
    const action = filmActions.loadFilmDetails(id)
    expect(action).toEqual({
      type: 'LOAD_FILM_DETAILS',
      payload: {
        id
      }
    })
  })

  it('should return correct action object when call loadFilmDetailsSuccess', () => {
    const film = {
      name: 'Home Along',
      genres: 'Family'
    }
    const action = filmActions.loadFilmDetailsSuccess(film)
    expect(action).toEqual({
      type: 'LOAD_FILM_DETAILS_SUCCESS',
      payload: {
        film
      }
    })
  })

   it('should return correct action object when call loadGenres', () => {
     const action = filmActions.loadGenres()
     expect(action).toEqual({ type: 'LOAD_GENRES' })
   })

   it('should return correct action object when call loadGenresSuccess', () => {
     const genres = ['Drama', 'Comedy', 'History']
     const action = filmActions.loadGenresSuccess(genres)
     expect(action).toEqual({
       type: 'LOAD_GENRES_SUCCESS',
       payload: {
         genres
       }
     })
   })

   it('should return correct action object when call loadGenreFilms', () => {
     const genreId = 11111
     const action = filmActions.loadGenreFilms(genreId)
     expect(action).toEqual({
       type: 'LOAD_GENRE_FILMS',
       payload: {
         genreId
       }
     })
   })

   it('should return correct action object when call loadGenreFilmsSuccess', () => {
     const films = [{
      name: 'Home Along',
      genres: 'Family'
    }]
     const action = filmActions.loadGenreFilmsSuccess(films)
     expect(action).toEqual({
       type: 'LOAD_GENRE_FILMS_SUCCESS',
       payload: {
         films
       }
     })
   })

  it('should return correct action object when call searchFilms', () => {
    const query = 'search-query'
    const action = filmActions.searchFilms(query)
    expect(action).toEqual({
      type: 'SEARCH_FILMS',
      payload: {
        query
      }
    })
  })

  it('should return correct action object when call searchFilmsSuccess', () => {
    const films = [{
    name: 'Home Along',
    genres: 'Family'
  }]
    const action = filmActions.searchFilmsSuccess(films)
    expect(action).toEqual({
      type: 'SEARCH_FILMS_SUCCESS',
      payload: {
        films
      }
    })
  })

  it('should return correct action object when call searchFilmsSuccess', () => {
    const error = 'ERROR'
    const action = filmActions.failure(error)
    expect(action).toEqual({
      type: 'ERROR',
      payload: {
        error
      }
    })
  })
})