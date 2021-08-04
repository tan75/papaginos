import React, { useState, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';

const IngredientsLayout = ({ state, handleChange }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const json = await fetch(
        'https://papaginos-server.herokuapp.com/v1/ingredients'
      ).then((res) => res.json());

      setIngredients(json);
      setIsLoading(false);
    };
    loadData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

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
        {ingredients.map((ingredient) => {
          if (ingredient.category === 'cheese') {
            return (
              <Checkbox
                name={ingredient.category}
                value={ingredient.name}
                checked={state?.cheese?.includes(ingredient.name)}
              />
            );
          }
        })}
      </fieldset>

      <fieldset>
        {ingredients.map((ingredient) => {
          if (ingredient.category === 'vegetables') {
            return (
              <Checkbox
                name={ingredient.category}
                value={ingredient.name}
                checked={state?.veg?.includes(ingredient.name)}
              />
            );
          }
        })}
      </fieldset>

      <fieldset>
        {ingredients.map((ingredient) => {
          if (ingredient.category === 'meat') {
            return (
              <Checkbox
                name={ingredient.category}
                value={ingredient.name}
                checked={state?.meat?.includes(ingredient.name)}
              />
            );
          }
        })}
      </fieldset>
    </>
  );
};

export default IngredientsLayout;
