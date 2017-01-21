import React from 'react';
import styles from './styles.css';

import api from '../../utiles/api.js';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut',
      genres: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // var genresResult = [];
    this.setState({value: event.target.value});
    api.getGenres(event.target.value).then((res) => {
      this.setState({
        genres: res
      });
      console.log(this.state.genres);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select className={styles.filter} value={this.state.value} onChange={this.handleChange}>
            <option value='grapefruit'>Grapefruit</option>
            <option value='lime'>Lime</option>
            <option value='coconut'>Coconut</option>
            <option value='mango'>Mango</option>
          </select>
        </label>
      </form>
    );
  }
};
