import React from 'react';
import Button from './Button'
import styles from './styles.css';

class SearchButton extends React.Component {

  render(){
    return (
      <Button className={ styles['button-search'] }>
         {this.props.children}
      </Button>
    )
      
  }
}

export default SearchButton;