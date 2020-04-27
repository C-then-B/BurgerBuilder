import React from 'react';

import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

export type SideDrawerProp = {
  closed: () => void;
  show: boolean;
};

const SideDrawer = (props: SideDrawerProp) => {
  const attachedClasses = props.show
    ? [styles.SideDrawer, styles.Open]
    : [styles.SideDrawer, styles.Close];

  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
