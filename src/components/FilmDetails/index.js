import React from 'react';
import styles from './styles.css';

import api from '../../utiles/api.js';

export default class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      genres: []
    };

  }

  componentWillMount() {
    api.getDetails(this.props.params.id).then((res) => {
      this.setState({
        film: res
      });
    })
  }

  render() {
    return (
      <div key={this.state.film.id} 
           className={styles['item-card']} >
        <h3 className={styles.title}>{this.state.film.title}</h3>
         <div className={styles.content}>
          <div className={styles.profile}>
            <div className={styles['profile__img']}>
              <img src={this.state.film.backdrop_path} alt='film' />
            </div>
            <div className={styles.rating}>
              {this.state.genres.map(genre => {
                return (
                  <p key={genre.id}>{genre.name}</p>
                )
              })}
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.description}>{this.state.film.overview}</div>
          </div>
        </div>
      </div>
    );
  }
};
