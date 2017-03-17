import React from 'react';
import styles from './styles.css';

const LikeButton = () => {
  const LikeButtonClick = ( event ) => {
    console.log('Im like');
  }
  return (
    <div className={ styles.button }>
      <button 
      className={ styles['button-like'] }
      onClick={ LikeButtonClick }></button>
    </div>
  );
};

export default LikeButton;