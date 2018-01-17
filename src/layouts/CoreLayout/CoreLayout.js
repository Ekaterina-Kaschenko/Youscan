import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactDOM from 'react-dom'

import * as filmsActions from '../../actions/films'

import Header from '../../components/Header'

import '../../reset.css'
import styles from './styles.scss'

class CoreLayout extends Component {
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
    this.textFieldChange = this.textFieldChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onKeyDownHandler = this.onKeyDownHandler.bind(this)
  }


  componentWillMount () {
    this.props.loadGenres()
  }

  textFieldChange (e) {
    e.preventDefault()
    
    const value = e.target.value

    value !== '' ? this.props.searchFilms(value) : null // don't search when search field is empty
    
  }

  onKeyDownHandler (e) {
    e.keyCode === 13 ? e.preventDefault() : null // don't close search field on Enter press
  }

  onGenreChange (e) {
    e.preventDefault()
    let genreId = e.target.value
    this.props.loadGenreFilms(genreId) // from actions
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  render () {
    const { value } = this.state
    
    return (
      <div className={styles.app}>
        <Header
          genres={this.props.genres}
          onGenreChange={this.onGenreChange}
          searchResults={this.props.searchResults}
          textFieldChange={this.textFieldChange}
          handleSubmit={this.handleSubmit}
          onKeyDownHandler={this.onKeyDownHandler}
        />
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
)(CoreLayout)