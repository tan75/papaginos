import React from 'react';
import { render, getByLabelText, fireEvent } from '@testing-library/react';
import PizzaConstructor from './PizzaConstructor';
import { reducer } from '../reducer/reducer';
import { statements } from '@babel/template';

describe('PizzaConstructor', () => {
  it('renders correctly', () => {
    const { container, getByDisplayValue } = render(<PizzaConstructor />);
    expect(container).toContainHTML('30');
    expect(container).toContainHTML('35');
    expect(container).toContainHTML('thin');
    expect(getByDisplayValue('thin')).toBeChecked();
    expect(container).toContainHTML('thick');
    expect(container).toContainHTML('tomato sauce');
    expect(getByDisplayValue('tomato sauce')).toBeChecked();
    expect(container).toContainHTML('white sauce');
    expect(container).toContainHTML('hot sauce');
    expect(container).toContainHTML('mozarella');
    expect(container).toContainHTML('cheddar');
    expect(container).toContainHTML('dor blue');
    expect(getByDisplayValue('tomato')).toContainHTML('tomato');
    expect(container).toContainHTML('mushroom');
    expect(container).toContainHTML('pepper');
    expect(container).toContainHTML('bacon');
    expect(container).toContainHTML('pepperoni');
    expect(container).toContainHTML('ham');
    expect(container).toContainHTML('Total: 200');
  });

  describe('on pizza size change', () => {
    it('updates pizza size radio button state', () => {
      const { getByDisplayValue } = render(<PizzaConstructor />);
      expect(getByDisplayValue('30')).toBeChecked();

      fireEvent.click(getByDisplayValue('35'));
      expect(getByDisplayValue('30')).not.toBeChecked();
      expect(getByDisplayValue('35')).toBeChecked();
    });

    it('updates price correctly', () => {
      const { container, getByDisplayValue } = render(<PizzaConstructor />);
      fireEvent.click(getByDisplayValue('35'));
      expect(container).toContainHTML('Total: 250');
    });
  });

  describe('on pizza base change', () => {
    it('updates pizza base radio button state', () => {
      const { getByDisplayValue } = render(<PizzaConstructor />);
      expect(getByDisplayValue('thin')).toBeChecked();
      fireEvent.click(getByDisplayValue('thick'));
      expect(getByDisplayValue('thin')).not.toBeChecked();
      expect(getByDisplayValue('thick')).toBeChecked();
    });

    fit('it does not change the price', () => {
      const { container, getByDisplayValue } = render(<PizzaConstructor />);
      fireEvent.click(getByDisplayValue('thick'));
      expect(container).toContainHTML('Total: 200');
    });
  });

  describe('on pizza sauce change', () => {
    it('updates pizza sauce radio button state', () => {
      const { getByDisplayValue } = render(<PizzaConstructor />);
      expect(getByDisplayValue('tomato sauce')).toBeChecked();
      fireEvent.click(getByDisplayValue('white sauce'));
      expect(getByDisplayValue('tomato sauce')).not.toBeChecked();
      expect(getByDisplayValue('hot sauce')).not.toBeChecked();
      expect(getByDisplayValue('white sauce')).toBeChecked();
      fireEvent.click(getByDisplayValue('hot sauce'));
      expect(getByDisplayValue('white sauce')).not.toBeChecked();
      expect(getByDisplayValue('tomato sauce')).not.toBeChecked();
      expect(getByDisplayValue('hot sauce')).toBeChecked();
    });

    it('does not change the price', () => {
      const { container, getByDisplayValue } = render(<PizzaConstructor />);

      fireEvent.click(getByDisplayValue('white sauce'));
      expect(container).toContainHTML('Total: 200');
    });
  });

  describe('on pizza cheese change', () => {
    it('updates pizza cheese checkboxes state', () => {
      const { getByDisplayValue } = render(<PizzaConstructor />);
      expect(getByDisplayValue('mozarella')).not.toBeChecked();
      expect(getByDisplayValue('cheddar')).not.toBeChecked();
      expect(getByDisplayValue('dor blue')).not.toBeChecked();
      fireEvent.click(getByDisplayValue('mozarella'));
      fireEvent.click(getByDisplayValue('cheddar'));
      expect(getByDisplayValue('mozarella')).toBeChecked();
      expect(getByDisplayValue('cheddar')).toBeChecked();
      expect(getByDisplayValue('dor blue')).not.toBeChecked();
    });

    it('updates price correctly', () => {
      const { container, getByDisplayValue } = render(<PizzaConstructor />);

      fireEvent.click(getByDisplayValue('mozarella'));
      fireEvent.click(getByDisplayValue('cheddar'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on pizza veg change', () => {
    it('updates pizza veg checkboxes state', () => {
      const { getByDisplayValue } = render(<PizzaConstructor />);
      expect(getByDisplayValue('tomato')).not.toBeChecked();
      expect(getByDisplayValue('mushroom')).not.toBeChecked();
      expect(getByDisplayValue('pepper')).not.toBeChecked();

      fireEvent.click(getByDisplayValue('tomato'));
      fireEvent.click(getByDisplayValue('mushroom'));
      expect(getByDisplayValue('tomato')).toBeChecked();
      expect(getByDisplayValue('mushroom')).toBeChecked();
      expect(getByDisplayValue('pepper')).not.toBeChecked();
    });

    it('updates price correctly', () => {
      const { container, getByDisplayValue } = render(<PizzaConstructor />);
      fireEvent.click(getByDisplayValue('tomato'));
      fireEvent.click(getByDisplayValue('mushroom'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on pizza meat change', () => {
    it('updates pizza meat checkboxes state', () => {
      const { getByDisplayValue } = render(<PizzaConstructor />);
      expect(getByDisplayValue('bacon')).not.toBeChecked();
      expect(getByDisplayValue('pepperoni')).not.toBeChecked();
      expect(getByDisplayValue('ham')).not.toBeChecked();
      fireEvent.click(getByDisplayValue('bacon'));
      fireEvent.click(getByDisplayValue('pepperoni'));
      expect(getByDisplayValue('bacon')).toBeChecked();
      expect(getByDisplayValue('pepperoni')).toBeChecked();
      expect(getByDisplayValue('ham')).not.toBeChecked();
    });

    it('updates price correctly', () => {
      const { container, getByDisplayValue } = render(<PizzaConstructor />);
      fireEvent.click(getByDisplayValue('bacon'));
      fireEvent.click(getByDisplayValue('pepperoni'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on submit', () => {
    it('renders the selected ingredients list', () => {
      const { container, getByDisplayValue, getByRole } = render(
        <PizzaConstructor />
      );
      fireEvent.click(getByDisplayValue('bacon'));
      fireEvent.click(getByDisplayValue('pepperoni'));
      fireEvent.click(getByRole('button'));
      expect(container).toContainHTML('30, thin, tomato, bacon, pepperoni');
    });
  });

  describe('test reducers', () => {
    it('updates pizza size correctly', () => {
      const newState = reducer(
        {},
        {
          type: 'SET_BASE_PIZZA',
          payload: {
            name: 'size',
            value: '30',
          },
        }
      );
      expect(newState.size).toBe('30');
    });

    it('updates pizza size correctly', () => {
      const newState = reducer(
        {},
        {
          type: 'SET_BASE_PIZZA',
          payload: {
            name: 'size',
            value: '35',
          },
        }
      );
      expect(newState.size).toBe('35');
    });

    it('updates pizza base correctly', () => {
      const newState = reducer(
        {},
        {
          type: 'SET_BASE_PIZZA',
          payload: {
            name: 'base',
            value: 'thin',
          },
        }
      );
      expect(newState.base).toBe('thin');
    });

    it('updates pizza base correctly', () => {
      const newState = reducer(
        {},
        {
          type: 'SET_BASE_PIZZA',
          payload: {
            name: 'base',
            value: 'thick',
          },
        }
      );
      expect(newState.base).toBe('thick');
    });

    it('updates pizza sauce correctly', () => {
      const newState = reducer(
        {},
        {
          type: 'SET_BASE_PIZZA',
          payload: {
            name: 'sauce',
            value: 'tomato',
          },
        }
      );
      expect(newState.sauce).toBe('tomato');
    });

    it('updates pizza cheese selection correctly', () => {
      const newState = reducer(
        {
          size: 30,
          base: 'thin',
          sauce: 'tomato sauce',
          cheese: ['dor blue'],
          veg: [],
          meat: [],
        },
        {
          type: 'ADD_EXTRA',
          payload: {
            name: 'cheese',
            value: 'mozarella',
          },
        }
      );
      expect(newState.cheese).toStrictEqual(['dor blue', 'mozarella']);
    });

    it('updates pizza veg selection correctly', () => {
      const newState = reducer(
        {
          size: 30,
          base: 'thin',
          sauce: 'tomato sauce',
          cheese: [],
          veg: ['tomato', 'mushroom'],
          meat: [],
        },
        {
          type: 'ADD_EXTRA',
          payload: {
            name: 'veg',
            value: 'pepper',
          },
        }
      );
      expect(newState.veg).toStrictEqual(['tomato', 'mushroom', 'pepper']);
    });

    it('updates pizza meat selection correctly', () => {
      const newState = reducer(
        {
          size: 30,
          base: 'thin',
          sauce: 'tomato sauce',
          cheese: [],
          veg: [],
          meat: ['bacon'],
        },
        {
          type: 'ADD_EXTRA',
          payload: {
            name: 'meat',
            value: 'pepperoni',
          },
        }
      );
      expect(newState.meat).toStrictEqual(['bacon', 'pepperoni']);
    });
  });
});
