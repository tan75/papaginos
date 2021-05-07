import React from 'react';

const PizzaBaseItem = ({ state, selectPizzaBase }) => {
  return (
    <div>
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
  );
};

export default PizzaBaseItem;
