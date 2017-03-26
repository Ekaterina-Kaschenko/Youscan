import React, { PropTypes } from 'react';
import styles from './styles.css';

const propTypes = {
  src: PropTypes.string.isRequired
}

const Logo = ({ src }) => {
  return (
    <a className={ styles.logo }>
      <img src={ src } alt='logo' />
    </a>
  );
};

Logo.propTypes = propTypes;

export default Logo;
