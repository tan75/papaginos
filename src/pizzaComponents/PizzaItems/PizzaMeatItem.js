import React from 'react';

const PizzaMeatItem = ({ selectPizzaMeat, deselectPizzaMeat }) => {
  return (
    <fieldset>
      <div>
        <label htmlFor="meatBacon">Bacon</label>
        <input
          data-testid="meatBacon"
          type="checkbox"
          name="meat"
          id="meatBacon"
          value="bacon"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaMeat('bacon');
            else selectPizzaMeat('bacon');
          }}
        />

        <label htmlFor="meatPepperoni">Pepperoni</label>
        <input
          data-testid="meatPepperoni"
          type="checkbox"
          name="meat"
          id="meatPepperoni"
          value="pepperoni"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaMeat('pepperoni');
            else selectPizzaMeat('pepperoni');
          }}
        />

        <label htmlFor="meatHam">Ham</label>
        <input
          data-testid="meatHam"
          type="checkbox"
          name="meat"
          id="meatHam"
          value="ham"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaMeat('ham');
            else selectPizzaMeat('ham');
          }}
        />
      </div>
    </fieldset>
  );
};

export default PizzaMeatItem;
