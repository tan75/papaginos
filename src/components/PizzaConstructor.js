import React, { useState, useReducer } from 'react';
import { reducer } from '../state/reducer';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import IngredientsLayout from './IngredientsLayout';
import { addExtra, removeExtra, selectBaseOptions } from '../state/actions';
import { initialOrderState } from '../state/initialOrderState';
import Button from './Button';

const PizzaConstructor = () => {
  const [state, dispatch] = useReducer(reducer, initialOrderState);
  const [orderList, setOrderList] = useState([]);

  // Total Order Price
  const totalPrice = calcTotalPrice(state);

  function showOrder(event) {
    event.preventDefault();
    const orderItems = [].concat(...Object.values(state));
    setOrderList(orderItems);
  }

  const handleChange = (e) => {
    const data = {
      name: e.target.name,
      value: e.target.value,
    };

    const isExtraIngredient = Array.isArray(state[e.target.name]);

    if (isExtraIngredient) {
      e.target.checked ? addExtra(data, dispatch) : removeExtra(data, dispatch);
      return;
    }

    selectBaseOptions(data, dispatch);
  };

  return (
    <div className="App">
      <form data-testid="pizza-form" onSubmit={showOrder}>
        <IngredientsLayout state={state} handleChange={handleChange} />
        <div>
          <p>Your Order</p>
          <p>{orderList.join(', ')}</p>
          <p>Total: {totalPrice}</p>
        </div>
        <Button />
      </form>
    </div>
  );
};

export default PizzaConstructor;
