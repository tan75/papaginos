export const addExtra = (payload, dispatch) =>
  dispatch({ type: 'ADD_EXTRA', payload });

export const removeExtra = (payload, dispatch) =>
  dispatch({
    type: 'REMOVE_EXTRA',
    payload,
  });

export const selectBaseOptions = (payload, dispatch) =>
  dispatch({
    type: 'SET_BASE_PIZZA',
    payload,
  });
