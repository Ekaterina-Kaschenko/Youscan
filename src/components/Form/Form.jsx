import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import classnames from 'classnames'

import TextField from '../../components/TextField'
import Button from '../../components/Button'
import styles from './styles.scss'

const propTypes = {
  filter: PropTypes.shape({
    item: PropTypes.object.isRequired
  }),
  items: PropTypes.array,
  value: PropTypes.string,
  textFieldOpened: PropTypes.bool.isRequired
}

export default class Form extends Component {
  constructor () {
    super();
    this.state = {
      textFieldOpened: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({ textFieldOpened: !this.state.textFieldOpened });
  }



  render () {
    const props = this.props;
    let items = this.props.items;
      if ( props.filter ) {
        items = items.filter( item =>
          item.title.toLowerCase()
          .includes(props.filter.toLowerCase())
        )
      }

    const textFieldClassnames =
      this.state.textFieldOpened ?
        [styles.textfield, styles['textfield__showen']].join(' ') :
        styles.textfield;

    return (
      <div className={ styles.search }>
        <form className={ styles.form } onSubmit={ props.onSubmit }>
          <TextField
            className={ textFieldClassnames }
            value={ props.value }
            onChange={ props.onChange }
            onKeyDown= {props.onKeyDown}  />
          <Button
            onClick={ this.handleClick }
            className={ styles['search-button'] }
            />
        </form>
        <ul className={ styles['search-results'] }>
          {props.films.map(item =>
            <li key={ item.id } className={ styles['search-results__item'] } >
              <Link to={ `/details/${item.id}` }>{ item.title } </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

Form.PropTypes = propTypes;