import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const propTypes = {
  value: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

const Select = ({ value, items, onChange, label }) => {
  return (
    <select
      className={styles.filter}
      value={value}
      onChange={onChange} >
      <option value={label}>{label}</option>
      { items.map(item => {
        return (
          <option value={item.name} key={item.id}>
            { item.name } + { item.id }
          </option>
        )
      })}
    </select>
  )
}

Select.propTypes = propTypes

export default Select
