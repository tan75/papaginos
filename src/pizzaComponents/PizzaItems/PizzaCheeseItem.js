import React from 'react';

const PizzaCheeseItem = ({ selectPizzaCheese, deselectPizzaCheese }) => {
  return (
    <fieldset>
      <div>
        <label htmlFor="cheeseMozarella">Mozarella</label>
        <input
          data-testid="cheeseMozarella"
          type="checkbox"
          name="cheese"
          id="cheeseMozarella"
          value="mozarella"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaCheese('mozarella');
            else selectPizzaCheese('mozarella');
          }}
        />

        <label htmlFor="cheeseCheddar">Cheddar</label>
        <input
          data-testid="cheeseCheddar"
          type="checkbox"
          name="cheese"
          id="cheeseCheddar"
          value="cheddar"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaCheese('cheddar');
            else selectPizzaCheese('cheddar');
          }}
        />

        <label htmlFor="cheeseDorBlue">Dor Blue</label>
        <input
          data-testid="cheeseDorBlue"
          type="checkbox"
          name="cheese"
          id="cheeseDorBlue"
          value="dor blue"
          onChange={(event) => {
            if (!event.target.checked) deselectPizzaCheese('dor blue');
            else selectPizzaCheese('dor blue');
          }}
        />
      </div>
    </fieldset>
  );
};

export default PizzaCheeseItem;
