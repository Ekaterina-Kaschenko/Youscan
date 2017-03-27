import React from 'react';

const routes = createRoutes();

const createRoutes = () => ({ 
  path : '/', 
  component : '../layouts', 
  indexRoute : Home, 
  childRoutes : [ 
      FilmDetails() 
    ] 
})

export default createRoutes;