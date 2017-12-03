import FilmDetails from './components/FilmDetails'
debugger
export default () => ({
  path: 'details/:id',
  getChildRoutes (location, cb) {
    cb(null, FilmDetails)
  }
})
