import React from 'react';
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

  render() {
    
    // const items = this.state.films;
    if (!this.state.films.length) {
      return (
        <div>Фильмы не найдены</div>
      );
    }
    return (
      <ul className={styles.list}>
         {this.state.films.map(film => {
            return (
              <li className={styles.item + ' ' + styles.tile} key={film.id}>
                <img src={film.backdrop_path} alt='film' />
                <h3 className={styles.name}>{film.title}</h3>
              </li>
            );
          })}
      </ul>
    );
    console.log('Popular films: ', this.state.films);
  }
};
