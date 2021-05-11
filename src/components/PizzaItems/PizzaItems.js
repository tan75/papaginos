import React from 'react';
import PizzaSizeItem from './PizzaSizeItem.js';
import PizzaBaseItem from './PizzaBaseItem.js';
import PizzaSauceItem from './PizzaSauceItem.js';
import PizzaCheeseItem from './PizzaCheeseItem.js';
import PizzaVegItem from './PizzaVegItem.js';
import PizzaMeatItem from './PizzaMeatItem.js';

const PizzaItems = ({
  state,
  selectPizzaSize,
  selectPizzaBase,
  selectPizzaSauce,
  selectPizzaCheese,
  deselectPizzaCheese,
  selectPizzaVeg,
  deselectPizzaVeg,
  selectPizzaMeat,
  deselectPizzaMeat,
}) => {
  return (
    <>
      <div>
        <PizzaSizeItem state={state} selectPizzaSize={selectPizzaSize} />
        <br />
        <PizzaBaseItem state={state} selectPizzaBase={selectPizzaBase} />
        <br />
      </div>
      <div>
        <PizzaSauceItem state={state} selectPizzaSauce={selectPizzaSauce} />
        <br />
      </div>
      <div>
        <PizzaCheeseItem
          state={state}
          selectPizzaCheese={selectPizzaCheese}
          deselectPizzaCheese={deselectPizzaCheese}
        />
        <br />
      </div>
      <div>
        <PizzaVegItem
          selectPizzaVeg={selectPizzaVeg}
          deselectPizzaVeg={deselectPizzaVeg}
        />
        <br />
      </div>
      <div>
        <PizzaMeatItem
          selectPizzaMeat={selectPizzaMeat}
          deselectPizzaMeat={deselectPizzaMeat}
        />
        <br />
      </div>
    </>
  );
};

export default PizzaItems;
