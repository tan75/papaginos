import React from 'react';

const PizzaSauceItem = ({ state, selectPizzaSauce }) => {
  return (
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
  );
};

export default PizzaSauceItem;
