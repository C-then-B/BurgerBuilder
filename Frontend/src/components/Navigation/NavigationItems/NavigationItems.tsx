import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

export type NavigationItemsProp = {
  //
};

const NavigationItems = (props: NavigationItemsProp) => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link='/' active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
