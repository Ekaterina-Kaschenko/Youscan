import React from 'react';
import styles from './styles.css';

import api from '../../utiles/api.js';

export default class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: []
    };

  }

  componentWillMount() {
    api.getDetails(142).then((res) => {
      this.setState({
        film: res
      });
    })
  }

  render() {
    console.log('state = ', this.state.film);
    return (
      <div key={this.state.film.id}>
        <div>{this.state.film.title}</div>
        <img src={this.state.film.backdrop_path} alt='film' />
        <div>{this.state.film.overview}</div>
      </div>
    );
  }
};
