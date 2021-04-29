import React, { useState } from 'react';
import { calcTotalPrice } from './calcTotalPrice';

const PizzaConstructor = () => {
  // Default pizza - thin tomato
  const [order, setOrder] = useState({
    size: 30,
    base: 'thin',
    sauce: 'tomato sauce',
    cheese: [],
    veg: [],
    meat: [],
  });

  const [orderList, setOrderList] = useState([]);

  // Total Order Price
  const totalPrice = calcTotalPrice(order);

  function showOrder(event) {
    event.preventDefault();
    const orderItems = [].concat(...Object.values(order));
    setOrderList(orderItems);
  }

  // Select or de-select items and update state
  const handleSelect = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'size') {
      setOrder({
        ...order,
        size: parseInt(value),
      });
    } else if (name === 'base') {
      setOrder({ ...order, base: value });
    } else if (name === 'sauce') {
      setOrder({ ...order, sauce: value });
    } else if (name === 'cheese') {
      if (event.target.checked) {
        setOrder({ ...order, cheese: [...order.cheese, value] });
      } else {
        setOrder({
          ...order,
          cheese: order.cheese.filter((el) => el !== event.target.value),
        });
      }
    } else if (name === 'veg') {
      if (event.target.checked) {
        setOrder({ ...order, veg: [...order.veg, value] });
      } else {
        setOrder({
          ...order,
          veg: order.veg.filter((el) => el !== event.target.value),
        });
      }
    } else if (name === 'meat') {
      if (event.target.checked) {
        setOrder({ ...order, meat: [...order.meat, value] });
      } else {
        setOrder({
          ...order,
          meat: order.meat.filter((el) => el !== event.target.value),
        });
      }
    }
  };

  const style = {
    margin: '1.5em',
  };

  return (
    <div style={style}>
      <h2>Create Your Own Pizza</h2>
      <form onSubmit={showOrder} data-testid="pizza-form">
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
              checked={order.size === 30}
              onChange={handleSelect}
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
              checked={order.size === 35}
              onChange={handleSelect}
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
              checked={order.base === 'thin'}
              onChange={handleSelect}
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
              checked={order.base === 'thick'}
              onChange={handleSelect}
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
              checked={order.sauce === 'tomato sauce'}
              onChange={handleSelect}
            />
            <label htmlFor="sauceWhite">White Sauce</label>

            <input
              data-testid="sauceWhite"
              type="radio"
              name="sauce"
              id="sauceWhite"
              value="white sauce"
              checked={order.sauce === 'white sauce'}
              onChange={handleSelect}
            />

            <label htmlFor="sauceSpicy">Spicy Sauce</label>
            <input
              data-testid="sauceSpicy"
              type="radio"
              name="sauce"
              id="sauceSpicy"
              value="spicy sauce"
              checked={order.sauce === 'spicy sauce'}
              onChange={handleSelect}
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
              onChange={handleSelect}
            />

            <label htmlFor="cheeseCheddar">Cheddar</label>
            <input
              data-testid="cheeseCheddar"
              type="checkbox"
              name="cheese"
              id="cheddar"
              value="cheddar"
              onChange={handleSelect}
            />

            <label htmlFor="cheeseDorBlue">Dor Blue</label>
            <input
              data-testid="cheeseDorBlue"
              type="checkbox"
              name="cheese"
              id="dorblue"
              value="dor blue"
              onChange={handleSelect}
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
              onChange={handleSelect}
            />

            <label htmlFor="vegMushroom">Mushroom</label>
            <input
              data-testid="vegMushroom"
              type="checkbox"
              name="veg"
              id="mushroom"
              value="mushroom"
              onChange={handleSelect}
            />

            <label htmlFor="vegPepper">Pepper</label>
            <input
              data-testid="vegPepper"
              type="checkbox"
              name="veg"
              id="pepper"
              value="pepper"
              onChange={handleSelect}
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
              onChange={handleSelect}
            />

            <label htmlFor="meatPepperoni">Pepperoni</label>
            <input
              data-testid="meatPepperoni"
              type="checkbox"
              name="meat"
              id="pepperoni"
              value="pepperoni"
              onChange={handleSelect}
            />

            <label htmlFor="meatHam">Ham</label>
            <input
              data-testid="meatHam"
              type="checkbox"
              name="meat"
              id="ham"
              value="ham"
              onChange={handleSelect}
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
