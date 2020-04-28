import React from 'react';

import styles from './Button.module.css';

export enum ButtonType {
  Success,
  Danger,
}

export type ButtonProp = {
  children?: React.ReactNode;
  type: ButtonType;
  clicked: () => void;
};

const Button = (props: ButtonProp) => {
  return (
    <button
      className={[styles.Button, styles[ButtonType[props.type]]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
