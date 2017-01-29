import React from 'react';
import styles from './styles.css';

import api from '../../utiles/api.js';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Choose genre',
      genres: [],
      choosenGenre: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    let genreID = this.state.genres.filter(g => g.name == event.target.value)[0].id;
    api.getGenresFilm(genreID).then((res) => {
      this.setState({
        choosenGenre: res.results
      });
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentWillMount() {
    api.getGenres().then((res) => {
      this.setState({
        genres: res
      });
    })    
  }

  render() {
    console.log('state ', this.state.choosenGenre);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select className={styles.filter} value={this.state.value}onChange={this.handleChange}>
            <option value='Choose genre'>Choose genre</option>
            {this.state.genres.map(genre => {
              return (
                <option value={genre.name} key={genre.id}>
                  {genre.name} + {genre.id}
                </option>
              );
            })}
          </select>
        </label>
      </form>
    );
  }
};
