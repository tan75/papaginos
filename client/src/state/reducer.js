export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SELECT_BASE_INGREDIENDS':
      return { ...state, [payload.name]: payload.value };

    case 'ADD_EXTRA_INGREDIEND':
      return {
        ...state,
        [payload.name]: [...state[payload.name], payload.value],
      };

    case 'REMOVE_EXTRA_INGREDIEND':
      return {
        ...state,
        [payload.name]: state[payload.name].filter(
          (item) => item !== payload.value
        ),
      };

    default:
      return state;
  }
};
