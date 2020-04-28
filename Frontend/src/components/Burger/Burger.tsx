import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient, {
  BurgerIngredientTypes,
} from './BurgerIngredient/BurgerIngredient';

export type BurgerProp = {
  ingredients: [BurgerIngredientTypes, number][];
};

const Burger = (props: BurgerProp) => {
  const ingredients: JSX.Element[] = [];
  // console.log(props.ingredients.length);
  // console.log(
  //   props.ingredients.map((x) => {
  //     return `${BurgerIngredientTypes[x[0]]}: ${x[1]}`;
  //   })
  // );
  props.ingredients.forEach((element) => {
    const ingredientIndex = element[0];
    const ingredient = BurgerIngredientTypes[ingredientIndex];
    const amount = element[1];
    for (let i = 0; i < amount; i++) {
      ingredients.push(
        <BurgerIngredient key={ingredient + i} type={ingredientIndex} />
      );
    }
  });

  if (ingredients.length === 0) {
    ingredients.push(<p key='NoIngredients'>Customize your burger!</p>);
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient
        key={BurgerIngredientTypes[BurgerIngredientTypes.BunTop]}
        type={BurgerIngredientTypes.BunTop}
      />
      {ingredients}
      <BurgerIngredient
        key={BurgerIngredientTypes[BurgerIngredientTypes.BunBottom]}
        type={BurgerIngredientTypes.BunBottom}
      />
    </div>
  );
};

export default Burger;
