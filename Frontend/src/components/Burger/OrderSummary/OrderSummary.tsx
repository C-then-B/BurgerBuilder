import React from 'react';

import styles from './OrderSummary.module.css';
import { BurgerIngredientTypes } from '../BurgerIngredient/BurgerIngredient';
import Button, { ButtonType } from '../../UI/Button/Button';

export type OrderSummaryProp = {
  ingredients: [BurgerIngredientTypes, number][];
  basePrice: number;
  ingredientsPrice: number;
  purchaseCancelled: () => void;
  purchaseContinued: () => void;
};

const OrderSummary = (props: OrderSummaryProp) => {
  const summary = props.ingredients.map((ingredient) => {
    return (
      <li key={ingredient[0]}>
        <span>{BurgerIngredientTypes[ingredient[0]]}</span>: {ingredient[1]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>Your customized delicious burger with the following ingredients:</p>
      <ul>{summary}</ul>
      <p className={styles.Centered}>
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
      <p className={styles.Centered}>
        <strong>Continue to checkout?</strong>
      </p>
      <Button type={ButtonType.Danger} clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button type={ButtonType.Success} clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
