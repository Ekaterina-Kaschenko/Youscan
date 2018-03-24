import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import Form from '../Form'
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
          <Logo
            src={'/logo.png'}
            onLogoClick={props.onLogoClick} />
          <Select
            items={props.genres}
            label='Выбрать жанр'
            onChange={props.onGenreChange}
            isSelectShow={props.isSelectShow} />
        </div>
        <Form
          films={props.searchResults}
          onChange={props.textFieldChange}
          onSubmit={props.handleSubmit}
          onKeyDown={props.onKeyDownHandler} 
          isFormShow={props.isFormShow}
          />
      </div>
    </header>
  )
}

Header.propTypes = propTypes

export default Header
