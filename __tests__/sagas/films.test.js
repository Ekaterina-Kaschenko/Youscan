import { put } from 'redux-saga/effects'

import * as filmsSaga from '../../src/sagas'
import * as filmsActions from '../../src/actions/films'

describe('films saga', () => {
  const fakeResponse = { success: true, fake: true }

  it('should load loadFilms', async () => {
    const gen = filmsSaga.loadFilms() // generator
    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(filmsActions.loadFilms()))
    expect(gen.next().done).toBe(true)
  })
})