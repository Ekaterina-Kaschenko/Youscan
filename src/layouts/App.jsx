import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom'
import Header from '../../components/Header';
// import { LikeButton } from '../../components/Button';
import Logo from '../../components/Header/Logo';
import Container from '../../containers/Container';
import Grid from '../../components/Grid';
import Items from '../../components/Items';
import '../../reset.css';
import styles from './style.css';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Header search={ <Container /> }>
          <Logo src={ './logo.png' } />
          <Container />
        </Header>
        <Grid className={ styles.container }>
          <Items />
        </Grid>
      </div>
    );
  }
}
