import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import TextField from '../TextField'
import Select from '../Select'

import styles from './styles.scss'


const propTypes = {
  children: PropTypes.element,
  search: PropTypes.element
}

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <Logo src={'/logo.png'} />
          <Select
            items={props.genres}
            label='Выбрать жанр'
            onChange={props.onGenreChange} />
        </div>
        <TextField
          films={props.searchResults}
          onChange={props.textFieldChange}
          onSubmit={props.handleSubmit}
          onKeyDown={props.onKeyDownHandler} 
          />
      </div>
    </header>
  )
}

Header.PropTypes = propTypes

export default Header
