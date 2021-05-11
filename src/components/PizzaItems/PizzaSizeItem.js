import React from 'react';

const PizzaSizeItem = ({ state, selectPizzaSize }) => {
  return (
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
  );
};

export default PizzaSizeItem;
