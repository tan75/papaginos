import React from 'react';

const PizzaVegItem = ({ selectPizzaVeg, deselectPizzaVeg }) => {
  return (
    <fieldset>
      <div>
        <label htmlFor="vegTomato">Tomato</label>
        <input
          data-testid="vegTomato"
          type="checkbox"
          name="veg"
          id="vegTomato"
          value="tomato"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaVeg('tomato');
            else selectPizzaVeg('tomato');
          }}
        />

        <label htmlFor="vegMushroom">Mushroom</label>
        <input
          data-testid="vegMushroom"
          type="checkbox"
          name="veg"
          id="vegMushroom"
          value="mushroom"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaVeg('mushroom');
            else selectPizzaVeg('mushroom');
          }}
        />

        <label htmlFor="vegPepper">Pepper</label>
        <input
          data-testid="vegPepper"
          type="checkbox"
          name="veg"
          id="vegPepper"
          value="pepper"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaVeg('pepper');
            else selectPizzaVeg('pepper');
          }}
        />
      </div>
    </fieldset>
  );
};

export default PizzaVegItem;
