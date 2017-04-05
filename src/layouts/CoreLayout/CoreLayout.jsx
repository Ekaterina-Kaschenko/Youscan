import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Container from '../../containers/Container';
import Header from '../../components/Header';
import Logo from '../../components/Header/Logo';
import '../../reset.css';
import styles from './styles.css';

export default class CoreLayouts extends Component {
  render() {
    return (
      <div className={ styles.app }> 
        <Header> 
          <Logo src={ './logo.png' } /> 
        </Header> 
        {this.props.children}
      </div>
    )
  }
}