import React from 'react';
import classNames from 'classnames';
import Button from './Button'
import styles from './styles.css';

class SearchButton extends React.Component {
  
  render(){
    console.log(this.props)
    return (
      <Button className={ styles['button-search'] }>
        {this.props.children}
      </Button>
    )
      
  }
}

export default SearchButton;