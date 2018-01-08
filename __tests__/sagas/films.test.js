import { put } from 'redux-saga/effects'

import * as filmsSaga from '../../src/sagas/films'
import * as filmsActions from '../../src/actions/films'

describe('films saga', () => {
  const fakeResponse = { success: true, fake: true }

  it('should load loadFilms', async () => {
    const gen = filmsSaga.loadFilms() // generator

    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(filmsActions.loadFilmsSuccess()))
    expect(gen.next().done).toBe(true)
  })

  it('should load film details on loadFilmDetails action', async () => {
    const action = {
      type: "LOAD_FILM_DETAILS",
      payload: {
        id: 353486
      }
    }

    const gen = filmsSaga.loadFilmDetails(action) // generator

    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(filmsActions.loadFilmDetailsSuccess()))
    expect(gen.next().done).toBe(true)
  })

  it('should load loadGenres', async () => {
    const gen = filmsSaga.loadGenres() // generator

    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(filmsActions.loadGenresSuccess()))
    expect(gen.next().done).toBe(true)
  })

  it('should load film details on loadGenreFilms action', async () => {
    const action = {
      type: "LOAD_GENRE_FILMS",
      payload: {
        genreId: 35
      }
    }

    const gen = filmsSaga.loadGenreFilms(action) // generator

    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(filmsActions.loadGenreFilmsSuccess()))
    expect(gen.next().done).toBe(true)
  })

  it('should load film details on searchFilm action', async () => {
    const action = {
      type: "SEARCH_FILMS",
      payload: {
        query: "home"
      }
    }

    const gen = filmsSaga.searchFilm(action) // generator

    expect(await gen.next().value).toEqual(fakeResponse)
    expect(gen.next().value).toEqual(put(filmsActions.searchFilmsSuccess()))
    expect(gen.next().done).toBe(true)
  })
})