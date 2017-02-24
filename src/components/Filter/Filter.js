import React from 'react';
import styles from './styles.css';

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

export default Filter;