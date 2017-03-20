import React from 'react';
import Button from './Button'
import styles from './styles.css';

class LikeButton extends React.Component {
  LikeButtonClick = (event) => {
    console.dir('Im like');
  }

  render(){
    return (
      <div className={ styles.button }>
        <Button className={ styles['button-like'] } onClick={ this.LikeButtonClick }>
          {this.props.children}
        </Button>
      </div>
    );
  }
}

export default LikeButton;