import React from 'react'
import Home from './Home'
import FilmDetails from './FilmDetails'
import CoreLayout from '../layouts/CoreLayout'


const createRoutes = (store = {}) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    FilmDetails()
  ]
})

export default createRoutes
