import React from 'react';

import styles from './Backdrop.module.css';

export type BackdropProp = {
  show: boolean;
  clicked: () => void;
};

const Backdrop = (props: BackdropProp) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
