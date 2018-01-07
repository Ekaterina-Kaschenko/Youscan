import { put } from 'redux-saga/effects'

import * as filmsSaga from '../../src/sagas/films'
import * as filmsActions from '../../src/actions/films'

describe('films saga', () => {
  const fakeResponse = { success: true, fake: true }

  it('should load loadFilms', async () => {
    const gen = filmsSaga.loadFilms() // generator

    console.log(gen)
    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(filmsActions.loadFilmsSuccess()))
    expect(gen.next().done).toBe(true)
  })

  // it('should load film details on loadFilmDetails action', async () => {
  //   const gen = filmsSaga.loadFilmDetails() // generator
  //   expect(await gen.next().value).toEqual(fakeResponse)
  //   expect(gen.next().value).toEqual(put(filmsActions.loadFilmDetails()))
  //   expect(gen.next().done).toBe(true)
  // })
})