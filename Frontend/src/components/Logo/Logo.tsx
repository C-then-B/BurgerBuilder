import React from 'react';

import styles from './Logo.module.css';
import logo from '../../assets/images/logo.png';

export type LogoProp = {
  height?: string;
};

const Logo = (props: LogoProp) => {
  return (
    <div className={styles.Logo} style={{ height: props.height }}>
      <img src={logo} alt='The Burger Builder' />
    </div>
  );
};

export default Logo;
