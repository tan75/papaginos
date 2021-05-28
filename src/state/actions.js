export const addExtra = (payload, dispatch) =>
  dispatch({ type: 'ADD_EXTRA_INGREDIEND', payload });

export const removeExtra = (payload, dispatch) =>
  dispatch({
    type: 'REMOVE_EXTRA_INGREDIEND',
    payload,
  });

export const selectBaseOptions = (payload, dispatch) =>
  dispatch({
    type: 'SELECT_BASE_INGREDIENDS',
    payload,
  });
