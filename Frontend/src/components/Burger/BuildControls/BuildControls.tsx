import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { BurgerIngredientTypes } from '../BurgerIngredient/BurgerIngredient';

export type BuildControlsProp = {
  ingredients: [BurgerIngredientTypes, number][];
  basePrice: number;
  ingredientsPrice: number;
  addIngredient: (ingredient: BurgerIngredientTypes) => void;
  substractIngredient: (ingredient: BurgerIngredientTypes) => void;
  ordered: () => void;
};

const BuildControls = (props: BuildControlsProp) => {
  let orderButtonActive = false;
  return (
    <div className={styles.BuildControls}>
      <p className={styles.TotalLabel}>
        Cost of ingredients:{' '}
        <strong>
          ${props.basePrice} + ${props.ingredientsPrice.toFixed(2)}
        </strong>
        <br />
        Total:{' '}
        <strong>
          ${(props.basePrice + props.ingredientsPrice).toFixed(2)}
        </strong>
      </p>

      {Object.keys(BurgerIngredientTypes)
        .filter(
          (x) =>
            isNaN(Number(x)) && // Filter out the numerical values of the enums
            x !== BurgerIngredientTypes[BurgerIngredientTypes.BunBottom] && // Filter buns
            x !== BurgerIngredientTypes[BurgerIngredientTypes.BunTop]
        )
        .map((ingredientType) => {
          const ingredientArr = props.ingredients.find(
            (x) => BurgerIngredientTypes[x[0]] === ingredientType
          );
          // If there is no such ingredient yet, we don't want the "less button"
          const lessButtonActive =
            ingredientArr === undefined ? false : ingredientArr[1] > 0;
          if (lessButtonActive) {
            orderButtonActive = true;
          }
          return (
            <BuildControl
              key={ingredientType}
              label={ingredientType}
              lessButtonActive={lessButtonActive}
              substractIngredient={() =>
                props.substractIngredient(
                  BurgerIngredientTypes[
                    ingredientType as keyof typeof BurgerIngredientTypes
                  ]
                )
              }
              addIngredient={() =>
                props.addIngredient(
                  BurgerIngredientTypes[
                    ingredientType as keyof typeof BurgerIngredientTypes
                  ]
                )
              }
            />
          );
        })}

      <button
        className={styles.OrderButton}
        disabled={!orderButtonActive}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
