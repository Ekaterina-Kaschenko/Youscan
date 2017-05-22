import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import api from '../../utiles/api.js'

import styles from './styles.scss'

const propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default class Items extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }

  componentWillMount () {
    api.getPopularFilms()
      .then((res) => {
        this.setState({
          data: res,
          loading: false
        })
      })
  }

  render () {
    const { loading, data } = this.state
    if (loading) {
      return (
        <div>Фильмы не найдены</div>
      )
    }

    return (
      <div className={styles.list}>
        { data.map(item => <Item key={item.id} item={item} />)}
      </div>
    )
  }
}
