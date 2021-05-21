export const reducer = (state, action) => {
  switch (Array.isArray(state[action.name])) {
    case true:
      return !action.isChecked
        ? {
            ...state,
            [action.name]: state[action.name].filter(
              (item) => item !== action.value
            ),
          }
        : { ...state, [action.name]: [...state[action.name], action.value] };
    case false:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};
