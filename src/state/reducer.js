export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_BASE_PIZZA':
      return { ...state, [payload.name]: payload.value };

    case 'ADD_EXTRA':
      return {
        ...state,
        [payload.name]: [...state[payload.name], payload.value],
      };

    case 'REMOVE_EXTRA':
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
