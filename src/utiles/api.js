if (process.env.NODE_ENV === 'test') {
  var fetch = () => Promise.resolve({
    json: () => ({ success: true, fake: true })
  })
}

const api = {
  getPopularFilms () {
    const url = 'http://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=3f04510390c8d68dba128013d0013351'
    return fetch (url)
      .then(r => { return r.json() })
  },
  searchFilms (query) {
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=3f04510390c8d68dba128013d0013351&query=${query}`
    return fetch (url)
      .then(r => { return r.json() })
  },
  getGenres () {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=3f04510390c8d68dba128013d0013351';
    return fetch (url)
      .then(r => { return r.json() })
  },

  getGenreFilms (id) {
    const url = `https://api.themoviedb.org/3/genre/${id}/movies?api_key=3f04510390c8d68dba128013d0013351&language=en-US&include_adult=false&sort_by=created_at.asc`
    return fetch (url)
      .then(res => res.json())
  },

  getDetails (id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3f04510390c8d68dba128013d0013351&language=en-US`
    return fetch (url)
      .then(r =>  r.json())
  }
}

export default api
