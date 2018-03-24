import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  value: PropTypes.string
}

const TextField = (props) => {
  return (
    <input
      type="text"
      placeholder='Search'
      className={ props.className }
      value={ props.value }
      onChange={ props.onChange }
      onKeyDown= {props.onKeyDown}
      />  
  )
}

TextField.propTypes = propTypes

export default TextField
