import React, { Component, PropTypes } from 'react';
import FilmDetails from '../routes/FilmDetails/components';
import TextField from '../components/TextField';
import Select from '../components/Select';
import api from '../utiles/api.js';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      genres: [],
      value: '',
      data: [],
      choosenGenre: null,
      selectedValue: 'Choose genre'
    };
    this.getGenres = api.getGenres.bind(this)
    this.getDetails = api.getDetails.bind(this)
  }


  componentWillMount() {
    this.getGenres().then((res) => {
      this.setState({
        genres: res
      });
    })

    this.getDetails(this.props.params.id).then((res) => {
      this.setState({
        item: res
      });
    })
  }

  textFieldChange(event) {
    const value = event.target.value;
    if (!value) {
      this.setState({
        data: [],
        value
      });
      return;
    }
    api.searchFilms(event.target.value).then((res) => {
      const titles = [];
      const appliedFilms = [];
      const data = res.forEach(item => {
        if (titles.includes(item.title)) { return; }
        titles.push(item.title);
        appliedFilms.push(item);
      });

      this.setState({
        data: appliedFilms,
        value
      });
    });
  }

  selectChange(event) {
    this.setState({ selectedValue: event.target.value });
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
  
  render() {
    const {value, genres} = this.state;
    console.log(this.props)
    return (
      <div>
        <FilmDetails 
          genres={ this.state.genres }
          details={ this.getDetails } />
        <TextField 
          films={ this.state.data } 
          onChange={ (e) => this.textFieldChange(e) }
          onSubmit={ (e) => this.handleSubmit(e) } />
        <Select 
          selectedValue={ value } 
          items={ genres } 
          label= 'Выбрать жанр' 
          onChange={ (e) => this.selectChange(e) } />
      </div>
    )
  }
}

