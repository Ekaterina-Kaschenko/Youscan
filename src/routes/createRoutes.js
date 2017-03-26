const createRoutes = () => ({ 
  path : '/', 
  component : '../layouts', 
  indexRoute : Home, 
  childRoutes : [ 
      FilmDetails() 
    ] 
})