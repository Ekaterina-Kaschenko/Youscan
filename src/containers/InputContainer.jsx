import React, { PropTypes } from 'react';
import TextField from '../components/TextField'
import api from '../utiles/api.js';

const propTypes = {
  value: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}

export default class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
    };
  }

  handleChange(event) {
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

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <TextField 
      films={ this.state.data } 
      onChange={ (e) => this.handleChange(e) }
      onSubmit={ (e) => this.handleSubmit(e) } />
    ) 
  }
};
