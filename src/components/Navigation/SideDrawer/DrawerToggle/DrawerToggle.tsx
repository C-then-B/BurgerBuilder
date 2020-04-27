import React from 'react';

import styles from './DrawerToggle.module.css';

export type DrawerToggleProp = {
  clicked: () => void;
};

const DrawerToggle = (props: DrawerToggleProp) => {
  return (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
