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

  render() {
    const { title, backdrop_path, overview, onClick } = this.props;
    if (!this.state.films.length) {
      return (
        <div>Фильмы не найдены</div>
      );
    }
    return (
      <ul className={styles.list}>
         {this.state.films.map(film => {
           console.log('hey',film.id, ' ', film.title);
            return (
              <Link to='/details'  
                className={styles.item + ' ' + styles.tile} 
                key={film.id}
                onClick={onClick}>
                <li>
                  <img src={film.backdrop_path} alt='film' />
                  <h3 className={styles.name}>{film.title}</h3>
                </li>
              </Link>
            );
            
          })}
      </ul>
    );
    console.log('Popular films: ', this.state.films);
  }
};
