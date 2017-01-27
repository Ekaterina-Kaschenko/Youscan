import React from 'react';
import styles from './styles.css';

import api from '../../utiles/api.js';

export default class Search extends React.Component {
 
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
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter( item => 
        item.title.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }

    const inputClassnames = 
      this.state.searchOpened ?
        [styles['search-text'], styles['search-text__showen']].join(' ') :
        styles['search-text'];
    return (
      <div className={styles.search}>
        <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className={inputClassnames}
            placeholder='Search'
            value={this.state.value}
            onChange={this.handleChange.bind(this)} />
          <button className={styles['search-button']}
            onClick={this.handleClick.bind(this)}>
          </button>
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
