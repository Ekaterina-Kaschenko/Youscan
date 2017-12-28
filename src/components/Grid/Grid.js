import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

const propTypes = {
  children: PropTypes.element
}

const Grid = ({children}) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

Grid.propTypes = propTypes

export default Grid
