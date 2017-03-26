import React, { Component, PropTypes } from 'react';
import FilmDetails from '../components/FilmDetails';
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

  } 

  componentWillMount() {
    api.getGenres().then((res) => {
      this.setState({
        genres: res
      });
    }).bind(this)   
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
          item={ this.state.item } 
          genres={ this.state.genres } />
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

