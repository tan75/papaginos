import React, { useState, useReducer } from 'react';
import { reducer } from '../reducer/reducer';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import PizzaComponents from './PizzaComponents';
import { addExtra, removeExtra, selectBaseOptions } from '../reducer/actions';

const initialOrderState = {
  size: '30',
  base: 'thin',
  sauce: 'tomato sauce',
  cheese: [],
  veg: [],
  meat: [],
};

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

    const isExtra = Array.isArray(state[e.target.name]);

    if (isExtra) {
      e.target.checked ? addExtra(data, dispatch) : removeExtra(data, dispatch);
      return;
    }

    selectBaseOptions(data, dispatch);
  };

  return (
    <div className="App">
      <form data-testid="pizza-form" onSubmit={showOrder}>
        <PizzaComponents state={state} handleChange={handleChange} />
        <div>
          <p>Your Order</p>
          <p>{orderList.join(', ')}</p>
          <p>Total: {totalPrice}</p>
        </div>
        <button type="submit">Order Now!</button>
      </form>
    </div>
  );
};

export default PizzaConstructor;
