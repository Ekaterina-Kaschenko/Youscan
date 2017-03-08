import React, { PropTypes } from 'react';
import Item from '../components/Item';

import api from '../utiles/api.js';

const propTypes = {
  value: PropTypes.string,
  films: PropTypes.array
}

export default class ItemContainer extends React.Component {
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
      <Item 
      value={this.state.value}
      films={this.state.films} />
    );
  }
};

ItemContainer.propTypes = propTypes;
