import React, { Component, PropTypes } from 'react';
import FilmDetails from '../components/FilmDetails';
import api from '../utiles/api.js';

const propTypes = {
  film: PropTypes.object,
  genres: PropTypes.array
}

export default class FilmDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      genres: []
    };

  } 

  componentDidMount() {
    api.getDetails(this.props.params.id).then((res) => {
      this.setState({
        film: res
      });
    })
  }
  
  render() {
    return (
      <FilmDetails film={ this.state.film } genres={ this.state.genres } />
    )
  }
}

FilmDetailsContainer.propTypes = propTypes;