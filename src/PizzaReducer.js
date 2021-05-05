export default function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_PIZZA_SIZE_30':
      return { ...state, size: 30 };

    case 'SELECT_PIZZA_SIZE_35':
      return { ...state, size: 35 };

    case 'SELECT_PIZZA_BASE_THIN':
      return { ...state, base: 'thin' };

    case 'SELECT_PIZZA_BASE_THICK':
      return { ...state, base: 'thick' };

    case 'SELECT_PIZZA_SAUCE_TOMATO':
      return { ...state, sauce: 'tomato' };

    case 'SELECT_PIZZA_SAUCE_WHITE':
      return { ...state, sauce: 'white sauce' };

    case 'SELECT_PIZZA_SAUCE_SPICY':
      return { ...state, sauce: 'spicy sauce' };

    case 'SELECT_PIZZA_CHEESE_MOZARELLA':
      return { ...state, cheese: [...state.cheese, 'mozarella'] };

    case 'DESELECT_PIZZA_CHEESE_MOZARELLA':
      return {
        ...state,
        cheese: state.cheese.filter((el) => el !== 'mozarella'),
      };

    case 'SELECT_PIZZA_CHEESE_CHEDDAR':
      return { ...state, cheese: [...state.cheese, 'cheddar'] };

    case 'DESELECT_PIZZA_CHEESE_CHEDDAR':
      return {
        ...state,
        cheese: state.cheese.filter((el) => el !== 'cheddar'),
      };

    case 'SELECT_PIZZA_CHEESE_DOR_BLUE':
      return { ...state, cheese: [...state.cheese, 'dor blue'] };

    case 'DESELECT_PIZZA_CHEESE_DOR_BLUE':
      return {
        ...state,
        cheese: state.cheese.filter((el) => el !== 'dor blue'),
      };

    case 'SELECT_PIZZA_VEG_TOMATO':
      return { ...state, veg: [...state.veg, 'tomato'] };

    case 'DESELECT_PIZZA_VEG_TOMATO':
      return {
        ...state,
        veg: state.veg.filter((el) => el !== 'tomato'),
      };

    case 'SELECT_PIZZA_VEG_MUSHROOM':
      return { ...state, veg: [...state.veg, 'mushroom'] };

    case 'DESELECT_PIZZA_VEG_MUSHROOM':
      return {
        ...state,
        veg: state.veg.filter((el) => el !== 'mushroom'),
      };

    case 'SELECT_PIZZA_VEG_PEPPER':
      return { ...state, veg: [...state.veg, 'pepper'] };

    case 'DESELECT_PIZZA_VEG_PEPPER':
      return {
        ...state,
        veg: state.veg.filter((el) => el !== 'pepper'),
      };

    case 'SELECT_PIZZA_MEAT_BACON':
      return { ...state, meat: [...state.meat, 'bacon'] };

    case 'DESELECT_PIZZA_MEAT_BACON':
      return {
        ...state,
        meat: state.meat.filter((el) => el !== 'bacon'),
      };

    case 'SELECT_PIZZA_MEAT_PEPPERONI':
      return { ...state, meat: [...state.meat, 'pepperoni'] };

    case 'DESELECT_PIZZA_MEAT_PEPPERONI':
      return {
        ...state,
        meat: state.meat.filter((el) => el !== 'pepperoni'),
      };

    case 'SELECT_PIZZA_MEAT_HAM':
      return { ...state, meat: [...state.meat, 'ham'] };

    case 'DESELECT_PIZZA_MEAT_HAM':
      return {
        ...state,
        meat: state.meat.filter((el) => el !== 'ham'),
      };

    default:
      return;
  }
}
