import React, { useState } from 'react';

import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

type LayoutProps = {};

const Layout = (props: React.PropsWithChildren<LayoutProps>) => {
  const [sideDrawerActive, setSideDrawerActive] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerActive(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerActive((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer show={sideDrawerActive} closed={sideDrawerClosedHandler} />
      <main className={styles.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
