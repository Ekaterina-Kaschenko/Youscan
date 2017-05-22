import FilmDetails from '../../components/FilmDetails'

export default () => ({
  path: 'details/:id',
  getChildRoutes (location, cb) {
    cb(null, FilmDetails)
  }
})
