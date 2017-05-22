import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'


const propTypes = {
  children: PropTypes.element,
  search: PropTypes.element
}

const Header = ({ children, search }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          {children}
        </div>
        {search}
      </div>
    </header>
  )
}

Header.PropTypes = propTypes

export default Header
