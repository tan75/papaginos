import React, { useState, useReducer } from 'react';
import reducer from './PizzaReducer';
import { calcTotalPrice } from './utils/calcTotalPrice';

const initialOrderState = {
  size: 30,
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

  const selectPizzaVeg = (veg) => {
    veg === 'tomato'
      ? dispatch({ type: 'SELECT_PIZZA_VEG_TOMATO' })
      : veg === 'mushroom'
      ? dispatch({ type: 'SELECT_PIZZA_VEG_MUSHROOM' })
      : dispatch({ type: 'SELECT_PIZZA_VEG_PEPPER' });
  };

  const selectPizzaMeat = (meat) => {
    meat === 'bacon'
      ? dispatch({ type: 'SELECT_PIZZA_MEAT_BACON' })
      : meat === 'pepperoni'
      ? dispatch({ type: 'SELECT_PIZZA_MEAT_PEPPERONI' })
      : dispatch({ type: 'SELECT_PIZZA_MEAT_HAM' });
  };

  const style = {
    margin: '1.5em',
  };

  return (
    <div style={style}>
      <h2>Create Your Own Pizza</h2>
      <form data-testid="pizza-form" onSubmit={showOrder}>
        <div>
          <fieldset>
            <label htmlFor="size30" value="30">
              Size 30
            </label>
            <input
              data-testid="size30"
              type="radio"
              name="size"
              id="size30"
              value="30"
              checked={state.size === 30}
              onChange={() => selectPizzaSize(30)}
            />

            <label htmlFor="size35" value="35">
              Size 35
            </label>
            <input
              data-testid="size35"
              type="radio"
              name="size"
              id="size35"
              value="35"
              checked={state.size === 35}
              onChange={() => selectPizzaSize(35)}
            />
          </fieldset>
          <br />
          <fieldset>
            <label htmlFor="baseThin" value="thin">
              Thin
            </label>
            <input
              data-testid="baseThin"
              type="radio"
              name="base"
              id="baseThin"
              value="thin"
              checked={state.base === 'thin'}
              onChange={() => selectPizzaBase('thin')}
            />

            <label htmlFor="baseThick" value="Thick">
              Thick
            </label>
            <input
              data-testid="baseThick"
              type="radio"
              name="base"
              id="baseThick"
              value="thick"
              checked={state.base === 'thick'}
              onChange={() => selectPizzaBase('thick')}
            />
          </fieldset>
        </div>
        <br />
        <fieldset>
          <div>
            <label htmlFor="sauceTomato">Tomato Sauce</label>
            <input
              data-testid="sauceTomato"
              type="radio"
              name="sauce"
              id="sauceTomato"
              value="tomato sauce"
              checked={state.sauce === 'tomato sauce'}
              onChange={() => selectPizzaSauce('tomato sauce')}
            />
            <label htmlFor="sauceWhite">White Sauce</label>

            <input
              data-testid="sauceWhite"
              type="radio"
              name="sauce"
              id="sauceWhite"
              value="white sauce"
              checked={state.sauce === 'white sauce'}
              onChange={() => selectPizzaSauce('white sauce')}
            />

            <label htmlFor="sauceSpicy">Spicy Sauce</label>
            <input
              data-testid="sauceSpicy"
              type="radio"
              name="sauce"
              id="sauceSpicy"
              value="spicy sauce"
              checked={state.sauce === 'spicy sauce'}
              onChange={() => selectPizzaSauce('spicy sauce')}
            />
          </div>
        </fieldset>
        <br />
        <fieldset>
          <div>
            <label htmlFor="cheeseMozarella">Mozarella</label>
            <input
              data-testid="cheeseMozarella"
              type="checkbox"
              name="cheese"
              id="mozarella"
              value="mozarella"
              onChange={() => selectPizzaCheese('mozarella')}
            />

            <label htmlFor="cheeseCheddar">Cheddar</label>
            <input
              data-testid="cheeseCheddar"
              type="checkbox"
              name="cheese"
              id="cheddar"
              value="cheddar"
              onChange={() => selectPizzaCheese('cheddar')}
            />

            <label htmlFor="cheeseDorBlue">Dor Blue</label>
            <input
              data-testid="cheeseDorBlue"
              type="checkbox"
              name="cheese"
              id="dorblue"
              value="dor blue"
              onChange={() => selectPizzaCheese('dor blue')}
            />
          </div>
        </fieldset>
        <br />
        <fieldset>
          <div>
            <label htmlFor="vegTomato">Tomato</label>
            <input
              data-testid="vegTomato"
              type="checkbox"
              name="veg"
              id="tomato"
              value="tomato"
              onChange={() => selectPizzaVeg('tomato')}
            />

            <label htmlFor="vegMushroom">Mushroom</label>
            <input
              data-testid="vegMushroom"
              type="checkbox"
              name="veg"
              id="mushroom"
              value="mushroom"
              onChange={() => selectPizzaVeg('mushroom')}
            />

            <label htmlFor="vegPepper">Pepper</label>
            <input
              data-testid="vegPepper"
              type="checkbox"
              name="veg"
              id="pepper"
              value="pepper"
              onChange={() => selectPizzaVeg('pepper')}
            />
          </div>
        </fieldset>
        <br />
        <fieldset>
          <div>
            <label htmlFor="meatBacon">Bacon</label>
            <input
              data-testid="meatBacon"
              type="checkbox"
              name="meat"
              id="bacon"
              value="bacon"
              onChange={() => selectPizzaMeat('bacon')}
            />

            <label htmlFor="meatPepperoni">Pepperoni</label>
            <input
              data-testid="meatPepperoni"
              type="checkbox"
              name="meat"
              id="pepperoni"
              value="pepperoni"
              onChange={() => selectPizzaMeat('pepperoni')}
            />

            <label htmlFor="meatHam">Ham</label>
            <input
              data-testid="meatHam"
              type="checkbox"
              name="meat"
              id="ham"
              value="ham"
              onChange={() => selectPizzaMeat('ham')}
            />
          </div>
        </fieldset>
        <br />

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

export default PizzaConstructor;
