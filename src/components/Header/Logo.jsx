import React from 'react';
import styles from './styles.css';

const propTypes = {
  logoSrc: React.PropTypes.string.isRequired
}

const Logo = ({logoSrc}) => {
  return (
    <a className={styles.logo}>
      <img src={logoSrc} alt='logo' />
    </a>
  );
};

Logo.propTypes = propTypes;

export default Logo;
