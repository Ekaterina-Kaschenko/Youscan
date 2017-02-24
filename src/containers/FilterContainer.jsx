import React from 'react';

import Filter from '../components/Filter'

import api from '../utiles/api.js';

export default class FilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Choose genre',
      genres: [],
      choosenGenre: null,
    };
    this.handleChange = this.handleChange.bind(this);
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

  componentWillMount() {
    api.getGenres().then((res) => {
      this.setState({
        genres: res
      });
    })   
  }

	
  render() {
    return (
			<Filter 
			value={this.state.value} 
			genres={this.state.genres} 
			onChange={this.handleChange} />
    );
  }
};
