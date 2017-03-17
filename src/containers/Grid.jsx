import React, { PropTypes } from 'react';
import GridItem from '../components/GridItem';

import api from '../utiles/api.js';

const propTypes = {
  value: PropTypes.string,
  films: PropTypes.array
}

export default class Grid extends React.Component {
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

    const { value, films } = this.state;

    return (
      <GridItem 
      value={ value }
      films={ films } />
    );
  }
};

Grid.propTypes = propTypes;
