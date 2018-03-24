import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const propTypes = {
  src: PropTypes.string.isRequired
}

const Logo = ({ src, onLogoClick }) => {
  return (
    <a className={styles.logo} onClick={ onLogoClick }>
      <img src={src} alt='logo' />
    </a>
  )
}

Logo.propTypes = propTypes

export default Logo
