import React, { useState, useEffect, useCallback } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import {
  BurgerIngredientTypes,
  BurgerIngredientTypesPrices,
} from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState<
    [BurgerIngredientTypes, number][]
  >([]);

  const [price, setPrice] = useState({
    basePrice: 4,
    ingredientsPrice: 0,
  });

  const [orderStatus, setOrderStatus] = useState({
    purchasing: false,
  });

  const increaseIngredientHandler = (ingredient: BurgerIngredientTypes) => {
    setIngredients((prev) => {
      // Make deep copy
      let copy = prev.map((x) => {
        return [...x] as [BurgerIngredientTypes, number];
      });
      const incrementBy = 1;
      // const ingredient = [
      //   BurgerIngredientTypes.Bacon,
      //   BurgerIngredientTypes.Cheese,
      //   BurgerIngredientTypes.Lettuce,
      //   BurgerIngredientTypes.Meat,
      // ][Math.floor(Math.random() * 4)];
      const elementIndex = copy.findIndex((i) => i[0] === ingredient);
      let element = copy[elementIndex];
      if (element === undefined) {
        element = [ingredient, 0];
      } else {
        copy.splice(elementIndex, 1);
      }
      element[1] = element[1] + incrementBy;
      return [...copy, element].sort((a, b) => a[0] - b[0]);
    });
  };

  const substractIngredientHandler = (ingredient: BurgerIngredientTypes) => {
    setIngredients((prev) => {
      // Make deep copy
      let copy = prev.map((x) => {
        return [...x] as [BurgerIngredientTypes, number];
      });
      const decrementBy = 1;
      const elementIndex = copy.findIndex((i) => i[0] === ingredient);
      let element = copy[elementIndex];
      if (element !== undefined) {
        element = [ingredient, element[1] - decrementBy];
        copy.splice(elementIndex, 1);
        if (element[1] <= 0) {
          return [...copy].sort((a, b) => a[0] - b[0]);
        }
        return [...copy, element].sort((a, b) => a[0] - b[0]);
      }
      return prev;
    });
  };

  const updatePrice = useCallback(() => {
    setPrice((prev) => {
      let finalIngredientsPrice = 0;

      ingredients.forEach((ingredientInfo) => {
        const amount = ingredientInfo[1];
        const price =
          BurgerIngredientTypesPrices[
            BurgerIngredientTypes[
              ingredientInfo[0]
            ] as keyof typeof BurgerIngredientTypesPrices
          ];
        if (amount * price > 0) {
          finalIngredientsPrice += amount * price;
        }
      });

      return { ...prev, ingredientsPrice: finalIngredientsPrice };
    });
  }, [ingredients]);

  useEffect(() => {
    updatePrice();
  }, [ingredients, updatePrice]);

  const purchaseHandler = () => {
    setOrderStatus((prev) => {
      return { ...prev, purchasing: true };
    });
  };

  const purchaseCancelHandler = () => {
    setOrderStatus((prev) => {
      return { ...prev, purchasing: false };
    });
  };

  const purchaseContinueHandler = () => {
    alert('Ok');
  };

  return (
    <>
      <Modal show={orderStatus.purchasing} modalClicked={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          basePrice={price.basePrice}
          ingredientsPrice={price.ingredientsPrice}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredients={ingredients}
        basePrice={price.basePrice}
        ingredientsPrice={price.ingredientsPrice}
        substractIngredient={substractIngredientHandler}
        addIngredient={increaseIngredientHandler}
        ordered={purchaseHandler}
      />
    </>
  );
};

export default BurgerBuilder;
