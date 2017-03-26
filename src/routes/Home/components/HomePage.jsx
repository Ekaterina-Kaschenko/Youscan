import React, { PropTypes, Component } from 'react';
import styles from './styles.css';

const HomePage = () => {
  return (
    <Grid className={ styles.container }> 
      <Items /> 
    </Grid>
  )
}

export default HomePage;