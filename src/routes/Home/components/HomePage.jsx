import React, { PropTypes, Component } from 'react';
import styles from './styles.css';
import Grid from '../../../components/Grid';
const HomePage = () => {
  return (
    <Grid className={ styles.container }> 
      <Items /> 
    </Grid>
  )
}

export default HomePage;