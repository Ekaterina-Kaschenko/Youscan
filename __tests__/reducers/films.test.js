import * as ActionTypes from '../../src/constants/types'
import filmsReducers, { initialState } from '../../src/reducers/films'

describe('Application reducer', () => {
  it('should load films on LOAD_FILMS_SUCCESS action', () => {
    const films = [{
      name: 'Home Along',
      genres: 'Family'
    }]

    const action = {
      type: ActionTypes.LOAD_FILMS_SUCCESS,
      payload: { films }
    }

    const mutated = filmsReducers(initialState, action)

    expect(mutated)
      .to.have.property('isFrontVisible')
      .that.is.a('boolean')
      .and.equal(true)

   console.log(mutated)
  })
})