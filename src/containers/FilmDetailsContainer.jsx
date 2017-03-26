import React, { Component, PropTypes } from 'react';
import FilmDetails from '../components/FilmDetails';
import api from '../utiles/api.js';

const propTypes = {
  item: PropTypes.object,
  genres: PropTypes.array
}

export default class FilmDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      genres: []
    };

  } 

  componentDidMount() {
    api.getDetails(this.props.params.id).then((res) => {
      this.setState({
        item: res
      });
    })
  }
  
  render() {
    return (
      <FilmDetails item={ this.state.item } genres={ this.state.genres } />
    )
  }
}

FilmDetailsContainer.propTypes = propTypes;