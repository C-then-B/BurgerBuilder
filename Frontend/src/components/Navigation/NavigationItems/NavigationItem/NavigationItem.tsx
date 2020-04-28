import React from 'react';

import styles from './NavigationItem.module.css';

export type NavigationItemProp = {
  children: React.ReactNode;
  link: string;
  active?: boolean;
};

const NavigationItem = (props: NavigationItemProp) => {
  return (
    <li className={styles.NavigationItem}>
      <a href='/' className={props.active ? styles.active : ''}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
