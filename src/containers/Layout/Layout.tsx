import React, { useState } from 'react';

import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
