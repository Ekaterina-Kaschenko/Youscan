const api = {
  getPopularFilms() {
    const url =  'http://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=3f04510390c8d68dba128013d0013351';
    return fetch(url)
      .then(r => { return r.json(); })
      .then(x => { return x.results; })
      .then(x => {
        return x.map(film => {
          // "w92", "w154", "w185", "w342", "w500", "w780", or "original"
          film.backdrop_path = 'http://image.tmdb.org/t/p/w342' + film.backdrop_path;
          film.poster_path   = 'http://image.tmdb.org/t/p/w342' + film.poster_path;
          return film;
        });
      });
  },
  searchFilms(query) {
    // const query = 'kill'; 
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=3f04510390c8d68dba128013d0013351&query=${query}`;
    return fetch(url)
      .then(r => { return r.json(); })
      .then(x => { return x.results; })
      .then(x => {
        return x.map(film => {
          return film;
        });
      });
  }
};

export default api;
