import React, { useState, useReducer } from 'react';
import { reducer } from '../PizzaReducer';
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
        <div>
          <PizzaComponents state={state} handleChange={handleChange} />
          <fieldset>
            <div>
              <label htmlFor="sauceTomato">
                <input
                  id="sauceTomato"
                  type="radio"
                  name="sauce"
                  value="tomato"
                  checked={state?.sauce === 'tomato'}
                  onChange={(e) => handleChange(e)}
                />
                Tomato sauce
              </label>
              <label htmlFor="sauceWhite">
                <input
                  id="sauceWhite"
                  type="radio"
                  name="sauce"
                  value="white"
                  checked={state?.sauce === 'white'}
                  onChange={(e) => handleChange(e)}
                />
                White sauce
              </label>
              <label htmlFor="sauceHot">
                <input
                  id="sauceHot"
                  type="radio"
                  name="sauce"
                  value="hot"
                  checked={state?.sauce === 'hot'}
                  onChange={(e) => handleChange(e)}
                />
                Hot sauce
              </label>
            </div>
          </fieldset>

          <fieldset>
            <label htmlFor="cheeseMozarella">
              <input
                id="cheeseMozarella"
                type="checkbox"
                name="cheese"
                value="mozarella"
                checked={state?.cheese?.includes('mozarella')}
                onChange={(e) => handleChange(e)}
              />
              Mozarella
            </label>
            <label htmlFor="cheeseCheddar">
              <input
                id="cheeseCheddar"
                type="checkbox"
                name="cheese"
                value="cheddar"
                checked={state?.cheese?.includes('cheddar')}
                onChange={(e) => handleChange(e)}
              />
              Cheddar
            </label>
            <label htmlFor="cheeseDorBlue">
              <input
                id="cheeseDorBlue"
                type="checkbox"
                name="cheese"
                value="dor blue"
                checked={state?.cheese?.includes('dor blue')}
                onChange={(e) => handleChange(e)}
              />
              Dor blue
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="vegTomato">
              <input
                id="vegTomato"
                type="checkbox"
                name="veg"
                value="tomato"
                checked={state?.veg?.includes('tomato')}
                onChange={(e) => handleChange(e)}
              />
              Tomato
            </label>
            <label htmlFor="vegMushroom">
              <input
                id="vegMushroom"
                type="checkbox"
                name="veg"
                value="mushroom"
                checked={state?.veg?.includes('mushroom')}
                onChange={(e) => handleChange(e)}
              />
              Mushroom
            </label>
            <label htmlFor="vegPepper">
              <input
                id="vegPepper"
                type="checkbox"
                name="veg"
                value="pepper"
                checked={state?.veg?.includes('pepper')}
                onChange={(e) => handleChange(e)}
              />
              Pepper
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="meatBacon">
              <input
                id="meatBacon"
                type="checkbox"
                name="meat"
                value="bacon"
                checked={state?.meat?.includes('bacon')}
                onChange={(e) => handleChange(e)}
              />
              Bacon
            </label>
            <label htmlFor="meatHam">
              <input
                id="meatHam"
                type="checkbox"
                name="meat"
                value="ham"
                checked={state?.meat?.includes('ham')}
                onChange={(e) => handleChange(e)}
              />
              Ham
            </label>
            <label htmlFor="meatPepperoni">
              <input
                id="meatPepperoni"
                type="checkbox"
                name="meat"
                value="pepperoni"
                checked={state?.meat?.includes('pepperoni')}
                onChange={(e) => handleChange(e)}
              />
              Pepperoni
            </label>
          </fieldset>
        </div>

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
