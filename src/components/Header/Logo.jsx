import React from 'react';
import styles from './styles.css';

const propTypes = {
  src: React.PropTypes.string.isRequired
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
