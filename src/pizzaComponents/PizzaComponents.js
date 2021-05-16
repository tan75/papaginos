import React from 'react';
import PizzaComponent from './PizzaComponent';

const PizzaComponents = ({ state, handleChange }) => {
  return (
    <>
      <fieldset>
        <PizzaComponent
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
        <PizzaComponent
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
      </fieldset>
      <fieldset>
        <PizzaComponent
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
        <PizzaComponent
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
      </fieldset>
      <fieldset>
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="sauceTomato"
          id="sauceTomato"
          type="radio"
          name="sauce"
          value="tomato"
          checked={state?.sauce === 'tomato'}
          onChange={(e) => handleChange(e)}
          labelName="Tomato sauce"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="sauceWhite"
          id="sauceWhite"
          type="radio"
          name="sauce"
          value="white"
          checked={state?.sauce === 'white'}
          onChange={(e) => handleChange(e)}
          labelName="White sauce"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="sauceHot"
          id="sauceHot"
          type="radio"
          name="sauce"
          value="hot"
          checked={state?.sauce === 'hot'}
          onChange={(e) => handleChange(e)}
          labelName="Hot sauce"
        />
      </fieldset>
      <fieldset>
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="cheeseMozarella"
          id="cheeseMozarella"
          type="checkbox"
          name="cheese"
          value="mozarella"
          checked={state?.cheese?.includes('mozarella')}
          onChange={(e) => handleChange(e)}
          labelName="Mozarella"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="cheeseCheddar"
          id="cheeseCheddar"
          type="checkbox"
          name="cheese"
          value="cheddar"
          checked={state?.cheese?.includes('cheddar')}
          onChange={(e) => handleChange(e)}
          labelName="Cheddar"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="cheeseDorBlue"
          id="cheeseDorBlue"
          type="checkbox"
          name="cheese"
          value="dor blue"
          checked={state?.cheese?.includes('dor blue')}
          onChange={(e) => handleChange(e)}
          labelName="Dor blue"
        />
      </fieldset>
      <fieldset>
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="vegTomato"
          id="vegTomato"
          type="checkbox"
          name="veg"
          value="tomato"
          checked={state?.veg?.includes('tomato')}
          onChange={(e) => handleChange(e)}
          labelName="Tomato"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="vegMushroom"
          id="vegMushroom"
          type="checkbox"
          name="veg"
          value="mushroom"
          checked={state?.veg?.includes('mushroom')}
          onChange={(e) => handleChange(e)}
          labelName="Mushroom"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="vegPepper"
          id="vegPepper"
          type="checkbox"
          name="veg"
          value="pepper"
          checked={state?.veg?.includes('pepper')}
          onChange={(e) => handleChange(e)}
          labelName="Pepper"
        />
      </fieldset>
      <fieldset>
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="meatBacon"
          id="meatBacon"
          type="checkbox"
          name="meat"
          value="bacon"
          checked={state?.meat?.includes('bacon')}
          onChange={(e) => handleChange(e)}
          labelName="Bacon"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="meatHam"
          id="meatHam"
          type="checkbox"
          name="meat"
          value="ham"
          checked={state?.meat?.includes('ham')}
          onChange={(e) => handleChange(e)}
          labelName="Ham"
        />
        <PizzaComponent
          handleChange={handleChange}
          htmlFor="meatPepperoni"
          id="meatPepperoni"
          type="checkbox"
          name="meat"
          value="pepperoni"
          checked={state?.meat?.includes('pepperoni')}
          onChange={(e) => handleChange(e)}
          labelName="Pepperoni"
        />
      </fieldset>
    </>
  );
};

export default PizzaComponents;
