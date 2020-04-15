import React from 'react';

import styles from './BurgerIngredient.module.css';

export enum BurgerIngredientTypes {
  BreadBottom,
  BreadTop,
  Meat,
  Cheese,
  Bacon,
  Lettuce,
}

export type BurgerIngredientProp = {
  type: BurgerIngredientTypes;
};

const BurgerIngredient = (props: BurgerIngredientProp) => {
  let ingredient: JSX.Element | null = null;

  switch (props.type) {
    case BurgerIngredientTypes.BreadTop:
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;

    case BurgerIngredientTypes.BreadBottom:
    case BurgerIngredientTypes.Meat:
    case BurgerIngredientTypes.Cheese:
    case BurgerIngredientTypes.Bacon:
    case BurgerIngredientTypes.Lettuce:
      const typeName = BurgerIngredientTypes[props.type];
      const stylesName = styles[typeName];
      ingredient = <div className={stylesName}></div>;
      break;
  }

  return ingredient;
};

export default BurgerIngredient;
