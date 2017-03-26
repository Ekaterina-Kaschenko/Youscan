import React, { PropTypes, Component } from 'react';
import styles from './styles.css';
import Grid from '../../../components/Grid';
import Grid from '../../../components/Items';

const HomePage = () => {
  return (
    <Grid className={ styles.container }> 
      <Items /> 
    </Grid>
  )
}

export default HomePage;