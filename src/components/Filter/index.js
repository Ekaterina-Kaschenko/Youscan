import React from 'react';
import styles from './styles.css';

import api from '../../utiles/api.js';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Choose genre',
      genres: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentWillMount() {
    api.getGenres().then((res) => {
      this.setState({
        genres: res
      });
      console.log(this.state.genres);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select className={styles.filter} value={this.state.value} onChange={this.handleChange}>
            <option value='Choose genre'>Choose genre</option>
            {this.state.genres.map(genre => {
              return (
                <option value={genre.name} key={genre.id}>{genre.name}</option>
              );
            })}
          </select>
        </label>
      </form>
    );
  }
};
