import React from 'react';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';

const IngredientsLayout = ({ state, handleChange }) => {
  return (
    <>
      <fieldset>
        <RadioButton
          name="size"
          value="30"
          checked={state?.size?.includes('30')}
          onChange={handleChange}
        />
        <RadioButton
          name="size"
          value="35"
          checked={state?.size?.includes('35')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <RadioButton
          name="base"
          value="thin"
          checked={state?.base?.includes('thin')}
          onChange={handleChange}
        />
        <RadioButton
          name="base"
          value="thick"
          checked={state?.base?.includes('thick')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <RadioButton
          name="sauce"
          value="tomato sauce"
          checked={state?.sauce?.includes('tomato sauce')}
          onChange={handleChange}
        />

        <RadioButton
          name="sauce"
          value="white sauce"
          checked={state?.sauce?.includes('white sauce')}
          onChange={handleChange}
        />
        <RadioButton
          name="sauce"
          value="hot sauce"
          checked={state?.sauce?.includes('hot sauce')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <Checkbox
          name="cheese"
          value="mozarella"
          checked={state?.cheese?.includes('mozarella')}
          onChange={handleChange}
        />
        <Checkbox
          name="cheese"
          value="cheddar"
          checked={state?.cheese?.includes('cheddar')}
          onChange={handleChange}
        />
        <Checkbox
          name="cheese"
          value="dor blue"
          checked={state?.cheese?.includes('dor blue')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <Checkbox
          name="veg"
          value="tomato"
          checked={state?.veg?.includes('tomato')}
          onChange={handleChange}
        />
        <Checkbox
          name="veg"
          value="mushroom"
          checked={state?.veg?.includes('mushroom')}
          onChange={handleChange}
        />
        <Checkbox
          name="veg"
          value="pepper"
          checked={state?.veg?.includes('pepper')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <Checkbox
          name="meat"
          value="bacon"
          checked={state?.meat?.includes('bacon')}
          onChange={handleChange}
        />
        <Checkbox
          name="meat"
          value="ham"
          checked={state?.meat?.includes('ham')}
          onChange={handleChange}
        />
        <Checkbox
          name="meat"
          value="pepperoni"
          checked={state?.meat?.includes('pepperoni')}
          onChange={handleChange}
        />
      </fieldset>
    </>
  );
};

export default IngredientsLayout;
