import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'

import Header from '../../components/Header';
import { LikeButton } from '../../components/Button';

import Logo from '../../components/Header/Logo';

import SearchContainer from '../../containers/SearchContainer';
import FilterContainer from '../../containers/FilterContainer';

import Grid from '../Grid';
import FilmDetails from '../../components/FilmDetails';

import '../../reset.css';
import styles from './style.css';

const propTypes = {
  children: React.PropTypes.element
};

export default class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <Header search={ <SearchContainer /> }>
          <Logo src={ './logo.png' } />
          <FilterContainer />
        </Header>
        <section className={ styles.container }>
          <LikeButton />
          <div className={ styles.content }>
            <Grid />
          </div>
        </section>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
