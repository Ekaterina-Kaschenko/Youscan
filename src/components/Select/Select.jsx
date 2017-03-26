import React, { PropTypes } from 'react';
import styles from './styles.css';

// const propTypes = {
//   value: PropTypes.string.isRequired,
//   items: PropTypes.array,
//   onChange: PropTypes.func.isRequired
// }

const Select = ({ value, items, onChange, label }) => {
  return (
    <select 
      className={ styles.filter } 
      /*selectedValue={ value } */
      onChange={ onChange } >
      <option value={label}>{label}</option>
      { items.map( item => {
        return (
          <option value={ item.name } key={ item.id }>
            { item.name } + { item.id }
          </option>
        );
      })}
    </select>
  );
};

// Select.propTypes = propTypes;

export default Select;