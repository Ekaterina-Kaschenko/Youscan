import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = {
  filter: PropTypes.array,
  items: PropTypes.array,
  value: PropTypes.string,
  films: PropTypes.array.isRequired,
  searchOpened: PropTypes.bool.isRequired
}

const Search = (props) => {
  let items = props.items;
    if (props.filter) {
      items = items.filter( item => 
        item.title.toLowerCase()
        .includes(props.filter.toLowerCase())
      )
    }

  const inputClassnames = 
    props.searchOpened ?
      [styles['search-text'], styles['search-text__showen']].join(' ') :
      styles['search-text'];

  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={props.onSubmit}>
        <input
          type="text"
          className={inputClassnames}
          placeholder='Search'
          value={props.value}
          onChange={props.onChange} />
        <button className={styles['search-button']}
          onClick={props.onClick} >
        </button>
      </form>
      <ul className={styles['search-results']}>
        {props.films.map(film => 
          <li key={film.id} className={styles['search-item']}>{film.title}</li>
        )}
      </ul>
    </div>
  );
}

Search.propTypes = propTypes;

export default Search;