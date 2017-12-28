import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import Item from '../Item'
import api from '../../utiles/api.js'
import * as filmsActions from '../../actions/films'

import styles from './styles.scss'

class Items extends Component {
  componentWillMount () {
    this.props.loadFilms()
  }

  render () {
    const { films } = this.props

    return (
      <div className={styles.list}>
        { films.map(item => <Item key={item.id} item={item} />)}
      </div>
    )
  }
}

Items.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object)
}

export default connect(
  state => ({
    films: state.films.films
  }),
  dispatch => bindActionCreators(filmsActions, dispatch)
)(Items)