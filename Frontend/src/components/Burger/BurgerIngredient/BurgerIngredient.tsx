import React from 'react';

import styles from './BurgerIngredient.module.css';

export enum BurgerIngredientTypes {
  BunBottom,
  BunTop,
  Lettuce,
  Bacon,
  Cheese,
  Meat,
}

export enum BurgerIngredientTypesPrices {
  BunBottom = 0,
  BunTop = 0,
  Lettuce = 0.3,
  Bacon = 0.7,
  Cheese = 0.5,
  Meat = 1.5,
}

export type BurgerIngredientProp = {
  type: BurgerIngredientTypes;
};

const BurgerIngredient = (props: BurgerIngredientProp) => {
  let ingredient: JSX.Element;
  const stylesName = styles[BurgerIngredientTypes[props.type]];

  switch (props.type) {
    case BurgerIngredientTypes.BunTop:
      ingredient = (
        <div className={stylesName}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;

    case BurgerIngredientTypes.BunBottom:
    case BurgerIngredientTypes.Meat:
    case BurgerIngredientTypes.Cheese:
    case BurgerIngredientTypes.Bacon:
    case BurgerIngredientTypes.Lettuce:
      ingredient = <div className={stylesName}></div>;
      break;
  }

  return ingredient;
};

export default BurgerIngredient;
