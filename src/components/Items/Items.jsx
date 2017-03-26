import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Item from '../Item';
import api from '../../utiles/api.js';

import styles from './styles.css';

const propTypes = {
  films: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loading: true
    }
  }

  componentWillMount() {
    api.getPopularFilms()
      .then((res) => {
        this.setState({
          films: res,
          loading: false
        });
      })
  }

  render() {
    const { loading, films } = this.state;
    if (loading) {
      return (
        <div>Фильмы не найдены</div>
      );
    }

    return (
      <div className={ styles.list }>
        { films.map(film => <Item key={ film.id } film={ film } /> )}
      </div>
    )
  }
} 