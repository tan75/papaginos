import React, { useState, useReducer } from 'react';
import { reducer } from '../state/PizzaReducer';
import { calcTotalPrice } from '../utils/calcTotalPrice';
import PizzaComponents from './PizzaComponents';

const initialOrderState = {
  size: '30',
  base: 'thin',
  sauce: 'tomato',
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
    dispatch({
      name: e.target.name,
      value: e.target.value,
      isChecked: e.target.checked,
    });
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
