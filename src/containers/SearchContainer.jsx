import React from 'react';

import Search from '../components/Search'

import api from '../utiles/api.js';

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      films: [],
      searchOpened: false
    };
  }

  handleChange(event) {
    const value = event.target.value;
    if (!value) {
      this.setState({
        films: [],
        value
      });
      return;
    }
    api.searchFilms(event.target.value).then((res) => {
      const titles = [];
      const appliedFilms = [];
      const films = res.forEach(item => {
        if (titles.includes(item.title)) { return; }
        titles.push(item.title);
        appliedFilms.push(item);
      });

      this.setState({
        films: appliedFilms,
        value
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
  handleClick() {
    this.setState({ searchOpened: !this.state.searchOpened });
  }

  render() {
    return (
      <Search 
      films={this.state.films} 
      onChange={this.handleChange.bind(this)}
      onClick={this.handleClick.bind(this)}
      onSubmit={this.handleSubmit.bind(this)}
      searchOpened={this.state.searchOpened} />
    ) 
  }
};
