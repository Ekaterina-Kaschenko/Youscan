import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom'
import Header from '../../components/Header';
// import { LikeButton } from '../../components/Button';
import Logo from '../../components/Header/Logo';
import InputContainer from '../../containers/InputContainer';
import SelectContainer from '../../containers/SelectContainer';
import Grid from '../../components/Grid';
import FilmDetails from '../../components/FilmDetails';
import Items from '../../components/Items';
import '../../reset.css';
import styles from './style.css';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Header search={ <InputContainer /> }>
          <Logo src={ './logo.png' } />
          <SelectContainer />
        </Header>
        <Grid className={ styles.container }>
          <Items />
        </Grid>
      </div>
    );
  }
}
