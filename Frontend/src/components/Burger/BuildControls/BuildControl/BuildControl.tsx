import React from 'react';

import styles from './BuildControl.module.css';

export type BuildControlProp = {
  label: string;
  lessButtonActive: boolean;
  addIngredient: () => void;
  substractIngredient: () => void;
};

const BuildControl = (props: BuildControlProp) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Less}
        onClick={props.substractIngredient}
        disabled={!props.lessButtonActive}
      >
        Less
      </button>
      <button className={styles.More} onClick={props.addIngredient}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
