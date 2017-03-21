import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

// import { SearchButton } from '../../components/Button';
 import Button from '../../components/Button';

const propTypes = {
  filter: React.PropTypes.shape({
    item: PropTypes.object.isRequired
  }),
  items: PropTypes.array,
  value: PropTypes.string,
  searchOpened: PropTypes.bool.isRequired
}

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchOpened: false
    }
  }

  handleClick = () => {
    this.setState({ searchOpened: !this.state.searchOpened });
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

    const inputClassnames = 
        this.state.searchOpened ?
          [styles.textfield, styles['textfield__showen']].join(' ') :
          styles.textfield;

    return (
      <div className={ styles.search }>
        <form className={ styles.form } onSubmit={ props.onSubmit }>
          <input
            type="text"
            className={ inputClassnames }
            placeholder='Search'
            value={ props.value }
            onChange={ props.onChange } />
          <Button 
          onClick={ this.handleClick }
          className={ styles['search-button'] }
          />
        </form>
        <ul className={ styles.list }>
          {props.films.map(film => 
            <li key={ film.id } className={ styles['list-item'] }>
              <Link to={ `/details/${film.id}` }>{ film.title }</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
