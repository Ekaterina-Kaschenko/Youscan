import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = {
  value: PropTypes.string.isRequired,
  genre: React.PropTypes.objectOf(React.PropTypes.shape({ 
    name: PropTypes.string.isRequired, 
    id: PropTypes.number.isRequired 
  })),
  onChange: PropTypes.func.isRequired
}

const Filter = ({ value, genres, onChange }) => {
  return (
    <select 
      className={ styles.filter } 
      value={ value } 
      onChange={ onChange } >
      <option value='Choose genre'>Choose genre</option>
      { genres.map( genre => {
        return (
          <option value={ genre.name } key={ genre.id }>
            { genre.name } + { genre.id }
          </option>
        );
      })}
    </select>
  );
};

Filter.propTypes = propTypes;

export default Filter;