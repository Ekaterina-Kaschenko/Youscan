import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'

import classNames from 'classnames';

import Header from '../../components/Header';
import LikeBtn from '../../components/LikeBtn';

import Logo from '../../components/Header/Logo';

import SearchContainer from '../../containers/SearchContainer';
import FilterContainer from '../../containers/FilterContainer';

import ItemContainer from '../ItemContainer';
import FilmDetails from '../../components/FilmDetails';

import '../../reset.css';
import styles from './style.css';

const propTypes = {
  children: React.PropTypes.element
};

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles['full-row']}>
          <div className={styles.wrapper}>
            <Header search={<SearchContainer />}>
              <Logo logoSrc={'./logo.png'} />
              <FilterContainer />
            </Header>
          </div>
        </div>
        <section className={classNames (styles.wrapper, styles.main) }>
          <LikeBtn />
          <div className={styles.content}>
            <ItemContainer />
          </div>
        </section>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
