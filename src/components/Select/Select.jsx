import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

const Select = ({ items, onChange, label }) => {
  return (
    <select
      className={styles.filter}
      onChange={onChange} >
      <option value={label}>{label}</option>
      { items.map(item => {
        return (
          <option value={item.id} key={item.id}>
            { item.name }
          </option>
        )
      })}
    </select>
  )
}

Select.propTypes = propTypes

export default Select
