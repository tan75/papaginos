import React from 'react';
import PizzaBaseComponent from './PizzaBaseComponent';

const PizzaComponents = ({ state, handleChange }) => {
  return (
    <>
      <fieldset>
        <div>
          <PizzaBaseComponent
            handleChange={handleChange}
            htmlFor="size30"
            id="size30"
            type="radio"
            name="size"
            value="30"
            checked={state?.size === '30'}
            onChange={(e) => handleChange(e)}
            labelName="Size 30"
          />

          <PizzaBaseComponent
            handleChange={handleChange}
            htmlFor="size35"
            id="size35"
            type="radio"
            name="size"
            value="35"
            checked={state?.size === '35'}
            onChange={(e) => handleChange(e)}
            labelName="Size 35"
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <PizzaBaseComponent
            handleChange={handleChange}
            htmlFor="baseThin"
            id="baseThin"
            type="radio"
            name="base"
            value="thin"
            checked={state?.base === 'thin'}
            onChange={(e) => handleChange(e)}
            labelName="Thin base"
          />

          <PizzaBaseComponent
            handleChange={handleChange}
            htmlFor="baseThick"
            id="baseThick"
            type="radio"
            name="base"
            value="thick"
            checked={state?.base === 'thick'}
            onChange={(e) => handleChange(e)}
            labelName="Thick base"
          />
        </div>
      </fieldset>
    </>
  );
};

export default PizzaComponents;
