import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

import { SearchButton } from '../../components/Button'

const propTypes = {
  filter: React.PropTypes.shape({
    item: PropTypes.object.isRequired
  }),
  items: PropTypes.array,
  value: PropTypes.string,
  films: React.PropTypes.array.isRequired,
  film: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired
  }),
  searchOpened: PropTypes.bool.isRequired
}

const Search = ( props ) => {
  let items = props.items;
    if ( props.filter ) {
      items = items.filter( item => 
        item.title.toLowerCase()
        .includes(props.filter.toLowerCase())
      )
    }

  const inputClassnames = 
    props.searchOpened ?
      [styles.textfield, styles['textfield__showen']].join(' ') :
      styles.textfield;

  return (
    <div className={ styles.search }>
      <form className={ styles.form } onSubmit={ props.onSubmit }>
        <input
          type="text"
          className={ inputClassnames }
          placeholder='Search'
          value={ props.value }
          onChange={ props.onChange } />
        <SearchButton onClick={ props.onClick } />
      </form>
      <ul className={ styles.list }>
        {props.films.map(film => 
          <li key={ film.id } className={ styles['list-item'] }>
            <Link to={ `/details/${film.id}` }>{ film.title }</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

Search.propTypes = propTypes;

export default Search;