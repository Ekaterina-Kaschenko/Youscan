import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import classnames from 'classnames'

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

export default class TextField extends Component {
  constructor() {
    super();
    this.state = {
      textFieldOpened: false
    }
  }

  handleClick = () => {
    this.setState({ textFieldOpened: !this.state.textFieldOpened });
    console.log('click')
  }


  render(){
    const props = this.props;
    let items = this.props.items;
      if ( props.filter ) {
        items = items.filter( item =>
          item.title.toLowerCase()
          .includes(props.filter.toLowerCase())
        )
      }

    const TextFieldClassnames =
      this.state.textFieldOpened ?
        [styles.textfield, styles['textfield__showen']].join(' ') :
        styles.textfield;

      // this.state.textFieldOpened ?
      //   classnames({styles.textfield}, styles['textfield__showen'] :
      //   styles.textfield )

    return (
      <div className={ styles.search }>
        <form className={ styles.form } onSubmit={ props.onSubmit }>
          <input
            type="text"
            className={ TextFieldClassnames }
            placeholder='Search'
            value={ props.value }
            onChange={ props.onChange } />
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

TextField.PropTypes = propTypes;