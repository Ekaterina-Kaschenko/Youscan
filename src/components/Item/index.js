import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

import api from '../../utiles/api.js'

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      films: []
    };
  }

  componentWillMount() {
    api.getPopularFilms().then((res) => {
      this.setState({
        films: res
      });
    })
  }

  getDetailsFilm(id) {
    return this.state.film.id;
  }

  render() {
    if (!this.state.films.length) {
      return (
        <div>Фильмы не найдены</div>
      );
    }
    return (
      <ul className={styles.list}>
         {this.state.films.map(film => {
            return (
              <Link to={`/details/${film.id}`} 
                className={styles.item + ' ' + styles.tile} 
                key={film.id} >
                <li>
                  <img src={film.backdrop_path} alt='film' />
                  <h3 className={styles.name}>{film.title}</h3>
                </li>
              </Link>
            );
          })}
      </ul>
    );
  }
};
