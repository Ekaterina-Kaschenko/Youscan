import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'

import Header from '../../components/Header';
// import { LikeButton } from '../../components/Button';

import Logo from '../../components/Header/Logo';

import InputContainer from '../../containers/InputContainer';
import SelectContainer from '../../containers/SelectContainer';

import Grid from '../Grid';
import FilmDetails from '../../components/FilmDetails';

import '../../reset.css';
import styles from './style.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={ styles.app }>
        <Header search={ <InputContainer /> }>
          <Logo src={ './logo.png' } />
          <SelectContainer />
        </Header>
        <section className={ styles.container }>
          <Grid className={ styles.content } />
        </section>
      </div>
    );
  }
}
