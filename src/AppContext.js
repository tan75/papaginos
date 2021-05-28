import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { initialOrderState } from './state/initialOrderState';
import { reducer } from './state/reducer';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialOrderState);
  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
