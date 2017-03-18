import React from 'react';
import styles from './styles.css';
import classNames from 'classnames'

const Button = props => (
        <button className={`${props.className}`}>
          {props.children} 
        </button>
);

export default Button;