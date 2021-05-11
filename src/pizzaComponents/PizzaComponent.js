import React, { useState, useReducer } from 'react';
import reducer from '../PizzaReducer';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import PizzaItems from './PizzaItems/PizzaItems';

const initialOrderState = {
  size: 30,
  base: 'thin',
  sauce: 'tomato sauce',
  cheese: [],
  veg: [],
  meat: [],
};

const PizzaComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialOrderState);
  const [orderList, setOrderList] = useState([]);

  // Total Order Price
  const totalPrice = calcTotalPrice(state);

  function showOrder(event) {
    event.preventDefault();
    const orderItems = [].concat(...Object.values(state));
    setOrderList(orderItems);
  }

  const selectPizzaSize = (size) => {
    size === 30
      ? dispatch({ type: 'SELECT_PIZZA_SIZE_30' })
      : dispatch({ type: 'SELECT_PIZZA_SIZE_35' });
  };

  const selectPizzaBase = (base) => {
    base === 'thin'
      ? dispatch({ type: 'SELECT_PIZZA_BASE_THIN' })
      : dispatch({ type: 'SELECT_PIZZA_BASE_THICK' });
  };

  const selectPizzaSauce = (sauce) => {
    sauce === 'tomato sauce'
      ? dispatch({ type: 'SELECT_PIZZA_SAUCE_TOMATO' })
      : sauce === 'white sauce'
      ? dispatch({ type: 'SELECT_PIZZA_SAUCE_WHITE' })
      : dispatch({ type: 'SELECT_PIZZA_SAUCE_SPICY' });
  };

  const selectPizzaCheese = (cheese) => {
    cheese === 'mozarella'
      ? dispatch({ type: 'SELECT_PIZZA_CHEESE_MOZARELLA' })
      : cheese === 'cheddar'
      ? dispatch({ type: 'SELECT_PIZZA_CHEESE_CHEDDAR' })
      : dispatch({ type: 'SELECT_PIZZA_CHEESE_DOR_BLUE' });
  };

  const deselectPizzaCheese = (cheese) => {
    cheese === 'mozarella'
      ? dispatch({ type: 'DESELECT_PIZZA_CHEESE_MOZARELLA' })
      : cheese === 'cheddar'
      ? dispatch({ type: 'DESELECT_PIZZA_CHEESE_CHEDDAR' })
      : dispatch({ type: 'DESELECT_PIZZA_CHEESE_DOR_BLUE' });
  };

  const selectPizzaVeg = (veg) => {
    veg === 'tomato'
      ? dispatch({ type: 'SELECT_PIZZA_VEG_TOMATO' })
      : veg === 'mushroom'
      ? dispatch({ type: 'SELECT_PIZZA_VEG_MUSHROOM' })
      : dispatch({ type: 'SELECT_PIZZA_VEG_PEPPER' });
  };

  const deselectPizzaVeg = (veg) => {
    veg === 'tomato'
      ? dispatch({ type: 'DESELECT_PIZZA_VEG_TOMATO' })
      : veg === 'mushroom'
      ? dispatch({ type: 'DESELECT_PIZZA_VEG_MUSHROOM' })
      : dispatch({ type: 'DESELECT_PIZZA_VEG_PEPPER' });
  };

  const selectPizzaMeat = (meat) => {
    meat === 'bacon'
      ? dispatch({ type: 'SELECT_PIZZA_MEAT_BACON' })
      : meat === 'pepperoni'
      ? dispatch({ type: 'SELECT_PIZZA_MEAT_PEPPERONI' })
      : dispatch({ type: 'SELECT_PIZZA_MEAT_HAM' });
  };

  const deselectPizzaMeat = (meat) => {
    meat === 'bacon'
      ? dispatch({ type: 'DESELECT_PIZZA_MEAT_BACON' })
      : meat === 'pepperoni'
      ? dispatch({ type: 'DESELECT_PIZZA_MEAT_PEPPERONI' })
      : dispatch({ type: 'DESELECT_PIZZA_MEAT_HAM' });
  };

  return (
    <div>
      <h2>Create Your Own Pizza</h2>

      <form data-testid="pizza-form" onSubmit={showOrder}>
        <div>
          <PizzaItems
            order={state}
            state={state}
            selectPizzaSize={selectPizzaSize}
            selectPizzaBase={selectPizzaBase}
            selectPizzaSauce={selectPizzaSauce}
            selectPizzaCheese={selectPizzaCheese}
            deselectPizzaCheese={deselectPizzaCheese}
            selectPizzaVeg={selectPizzaVeg}
            deselectPizzaVeg={deselectPizzaVeg}
            selectPizzaMeat={selectPizzaMeat}
            deselectPizzaMeat={deselectPizzaMeat}
          />
        </div>

        <div>
          <p>Your Order:</p>
          <p>{orderList.join(', ')}</p>
          <p>Total: {totalPrice}</p>
        </div>
        <button type="submit">Order Now!</button>
      </form>
    </div>
  );
};

export default PizzaComponent;
