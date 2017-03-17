import React from 'react';
import styles from './styles.css';

const LikeBtn = () => {
  const LikeClick = (event) => {
    console.log('Im like');
  }
  return (
    <div className={ styles.button }>
      <button 
      className={ styles['button-like'] }
      onClick={ LikeClick }></button>
    </div>
  );
};

export default LikeBtn;