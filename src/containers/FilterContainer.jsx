import React, {PropTypes} from 'react';

import Filter from '../components/Filter'

import api from '../utiles/api.js';

const propTypes = {
  value: PropTypes.string,
  genres: PropTypes.array,
  choosenGenre: PropTypes.array
}

export default class FilterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Choose genre',
      genres: [],
      choosenGenre: null,
    };
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
    const {value, genres} = this.state;
    return (
			<Filter 
			value={value} 
			genres={genres} 
			onChange={() => this.handleChange} />
    );
  }
};

FilterContainer.propTypes = propTypes;