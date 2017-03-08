import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = {
  value: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired
}

const Filter = (props) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>
        <select 
          className={styles.filter} 
          value={props.value} 
          onChange={props.onChange} >
          <option value='Choose genre'>Choose genre</option>
          {props.genres.map(genre => {
            return (
              <option value={genre.name} key={genre.id}>
                {genre.name} + {genre.id}
              </option>
            );
          })}
        </select>
      </label>
    </form>
  );
};

Filter.propTypes = propTypes;

export default Filter;