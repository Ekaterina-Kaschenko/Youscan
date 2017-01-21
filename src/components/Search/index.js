import React from 'react';
import styles from './styles.css';

import api from '../../utiles/api.js';

export default class Search extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      films: []
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    api.searchFilms(event.target.value).then((res) => {
      this.setState({
        films: res
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  
  render() {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter( item => 
        item.title.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }
    return (
      <div className={styles.search}>
        <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className={styles['search-text'] + ' ' + styles['search-text__showen']}
            placeholder='Search'
            value={this.state.value}
            onChange={this.handleChange.bind(this)} />
          <button className={styles['search-button']}></button>
        </form>
        <ul className={styles['search-results']}>
          {this.state.films.map(film => 
            <li key={film.id} className={styles['search-item']}>{film.title}</li>
          )}
        </ul>
      </div> 
    ) 
  }
  
};
