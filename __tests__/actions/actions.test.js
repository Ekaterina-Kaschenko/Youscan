import * as filmActions from '../../src/actions/films'

it('aaa', function() {
  expect(true).toBe(true)
})

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
})