import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import Logo from '../../components/Header/Logo';
import '../../reset.css';
import styles from './style.css';

export default class CoreLayouts extends Component {
  render() {
    return (
      <div className={ styles.app }> 
        <Header> 
          <Logo src={ './logo.png' } /> 
        </Header> 
        {children}
      </div>
    )
  }
}