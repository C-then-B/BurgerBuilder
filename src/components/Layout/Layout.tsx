import React from 'react';

import styles from './Layout.module.css';

type LayoutProps = {};

const Layout = (props: React.PropsWithChildren<LayoutProps>) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
