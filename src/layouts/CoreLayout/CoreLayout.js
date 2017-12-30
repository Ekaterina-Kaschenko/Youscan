import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactDOM from 'react-dom'

import * as filmsActions from '../../actions/films'

import Header from '../../components/Header'
import Logo from '../../components/Header/Logo'
import TextField from '../../components/TextField'
import Select from '../../components/Select'
import api from '../../utiles/api.js'

import '../../reset.css'
import styles from './styles.scss'

class CoreLayouts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: {},
      genres: [],
      value: '',
      data: [],
      choosenGenre: null,
      selectedValue: 'Choose genre'
    }

    this.onGenreChange = this.onGenreChange.bind(this)
  }


  componentWillMount () {

    this.props.loadGenres()
  }

  textFieldChange (event) {
    const value = event.target.value
    this.props.searchFilms(value)
  }

  onGenreChange (event) {

    let genreId = event.target.value
    this.props.loadGenreFilms(genreId) // from actions
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    const { value } = this.state
    const { genres } = this.props
    return (
      <div className={styles.app}>
        <Header search={<TextField
          films={this.props.searchResults}
          onChange={(e) => this.textFieldChange(e)}
          onSubmit={(e) => this.handleSubmit(e)} />}>
          <Logo src={'/logo.png'} />
          <Select
            items={genres}
            label='Выбрать жанр'
            onChange={this.onGenreChange} />
        </Header>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({
    films: state.films.films,
    genres: state.films.genres,
    searchResults: state.films.searchResults
  }),
  dispatch => bindActionCreators(filmsActions, dispatch)
)(CoreLayouts)