import React from 'react';
import ExtraComponent from './ExtraComponent';
import BaseComponent from './BaseComponent';

const Components = ({ state, handleChange }) => {
  return (
    <>
      <fieldset>
        <BaseComponent
          name="size"
          value="30"
          checked={state?.size?.includes('30')}
          onChange={handleChange}
        />
        <BaseComponent
          name="size"
          value="35"
          checked={state?.size?.includes('35')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <BaseComponent
          name="base"
          value="thin"
          checked={state?.base?.includes('thin')}
          onChange={handleChange}
        />
        <BaseComponent
          name="base"
          value="thick"
          checked={state?.base?.includes('thick')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <BaseComponent
          name="sauce"
          value="tomato sauce"
          checked={state?.sauce?.includes('tomato sauce')}
          onChange={handleChange}
        />

        <BaseComponent
          name="sauce"
          value="white sauce"
          checked={state?.sauce?.includes('white sauce')}
          onChange={handleChange}
        />
        <BaseComponent
          name="sauce"
          value="hot sauce"
          checked={state?.sauce?.includes('hot sauce')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <ExtraComponent
          name="cheese"
          value="mozarella"
          checked={state?.cheese?.includes('mozarella')}
          onChange={handleChange}
        />
        <ExtraComponent
          name="cheese"
          value="cheddar"
          checked={state?.cheese?.includes('cheddar')}
          onChange={handleChange}
        />
        <ExtraComponent
          name="cheese"
          value="dor blue"
          checked={state?.cheese?.includes('dor blue')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <ExtraComponent
          name="veg"
          value="tomato"
          checked={state?.veg?.includes('tomato')}
          onChange={handleChange}
        />
        <ExtraComponent
          name="veg"
          value="mushroom"
          checked={state?.veg?.includes('mushroom')}
          onChange={handleChange}
        />
        <ExtraComponent
          name="veg"
          value="pepper"
          checked={state?.veg?.includes('pepper')}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <ExtraComponent
          name="meat"
          value="bacon"
          checked={state?.meat?.includes('bacon')}
          onChange={handleChange}
        />
        <ExtraComponent
          name="meat"
          value="ham"
          checked={state?.meat?.includes('ham')}
          onChange={handleChange}
        />
        <ExtraComponent
          name="meat"
          value="pepperoni"
          checked={state?.meat?.includes('pepperoni')}
          onChange={handleChange}
        />
      </fieldset>
    </>
  );
};

export default Components;
