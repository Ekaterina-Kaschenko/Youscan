import React, { PropTypes } from 'react';

import Input from '../components/Input'

import api from '../utiles/api.js';

const propTypes = {
  value: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired
}

export default class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      films: []
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
  
  

  render() {
    
    return (
      <Input 
      films={ this.state.films } 
      onChange={ (e) => this.handleChange(e) }
     
      onSubmit={ (e) => this.handleSubmit(e) } />
    ) 
  }
};
