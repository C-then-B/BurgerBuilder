import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient, {
  BurgerIngredientTypes,
} from './BurgerIngredient/BurgerIngredient';

export type BurgerProp = {
  //
};

const Burger = (props: BurgerProp) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={BurgerIngredientTypes.BreadTop} />
      <BurgerIngredient type={BurgerIngredientTypes.Cheese} />
      <BurgerIngredient type={BurgerIngredientTypes.Meat} />
      <BurgerIngredient type={BurgerIngredientTypes.BreadBottom} />
    </div>
  );
};

export default Burger;
