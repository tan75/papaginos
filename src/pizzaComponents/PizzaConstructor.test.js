import React from 'react';
import { render, getByLabelText, fireEvent } from '@testing-library/react';
import PizzaConstructor from './PizzaConstructor';
import { reducer } from '../PizzaReducer';
import { statements } from '@babel/template';

describe('PizzaConstructor', () => {
  it('renders correctly', () => {
    const { container, getByLabelText } = render(<PizzaConstructor />);
    expect(container).toContainHTML('Size 30');
    expect(container).toContainHTML('Size 35');
    expect(container).toContainHTML('Thin');
    expect(getByLabelText('Thin base')).toBeChecked();
    expect(container).toContainHTML('Thick');
    expect(container).toContainHTML('Tomato sauce');
    expect(getByLabelText('Tomato sauce')).toBeChecked();
    expect(container).toContainHTML('white');
    expect(container).toContainHTML('Hot sauce');
    expect(container).toContainHTML('Mozarella');
    expect(container).toContainHTML('Cheddar');
    expect(container).toContainHTML('Dor blue');
    expect(getByLabelText('Tomato')).toContainHTML('tomato');
    expect(container).toContainHTML('Mushroom');
    expect(container).toContainHTML('Pepper');
    expect(container).toContainHTML('Bacon');
    expect(container).toContainHTML('Pepperoni');
    expect(container).toContainHTML('Ham');
    expect(container).toContainHTML('Total: 200');
  });

  describe('on pizza size change', () => {
    it('updates pizza size radio button state', () => {
      const { getByLabelText } = render(<PizzaConstructor />);
      expect(getByLabelText('Size 30')).toBeChecked();

      fireEvent.click(getByLabelText('Size 35'));
      expect(getByLabelText('Size 30')).not.toBeChecked();
      expect(getByLabelText('Size 35')).toBeChecked();
    });
    it('updates price correctly', () => {
      const { container, getByLabelText } = render(<PizzaConstructor />);
      fireEvent.click(getByLabelText('Size 35'));
      expect(container).toContainHTML('Total: 250');
    });
  });

  describe('on pizza base change', () => {
    it('updates pizza base radio button state', () => {
      const { getByLabelText } = render(<PizzaConstructor />);
      expect(getByLabelText('Thin base')).toBeChecked();

      fireEvent.click(getByLabelText('Thick base'));
      expect(getByLabelText('Thin base')).not.toBeChecked();
      expect(getByLabelText('Thick base')).toBeChecked();
    });
    it('it does not change the price', () => {
      const { container, getByLabelText } = render(<PizzaConstructor />);

      fireEvent.click(getByLabelText('Thick base'));
      expect(container).toContainHTML('Total: 200');
    });
  });

  describe('on pizza sauce change', () => {
    it('updates pizza sauce radio button state', () => {
      const { getByLabelText } = render(<PizzaConstructor />);
      expect(getByLabelText('Tomato sauce')).toBeChecked();

      fireEvent.click(getByLabelText('White sauce'));
      expect(getByLabelText('Tomato sauce')).not.toBeChecked();
      expect(getByLabelText('Hot sauce')).not.toBeChecked();
      expect(getByLabelText('White sauce')).toBeChecked();

      fireEvent.click(getByLabelText('Hot sauce'));
      expect(getByLabelText('White sauce')).not.toBeChecked();
      expect(getByLabelText('Tomato sauce')).not.toBeChecked();

      expect(getByLabelText('Hot sauce')).toBeChecked();
    });
    it('does not change the price', () => {
      const { container, getByLabelText } = render(<PizzaConstructor />);

      fireEvent.click(getByLabelText('White sauce'));
      expect(container).toContainHTML('Total: 200');
    });
  });

  describe('on pizza cheese change', () => {
    it('updates pizza cheese checkboxes state', () => {
      const { getByLabelText } = render(<PizzaConstructor />);
      expect(getByLabelText('Mozarella')).not.toBeChecked();
      expect(getByLabelText('Cheddar')).not.toBeChecked();
      expect(getByLabelText('Dor blue')).not.toBeChecked();

      fireEvent.click(getByLabelText('Mozarella'));
      fireEvent.click(getByLabelText('Cheddar'));
      expect(getByLabelText('Mozarella')).toBeChecked();
      expect(getByLabelText('Cheddar')).toBeChecked();
      expect(getByLabelText('Dor blue')).not.toBeChecked();
    });

    it('updates price correctly', () => {
      const { container, getByLabelText } = render(<PizzaConstructor />);

      fireEvent.click(getByLabelText('Mozarella'));
      fireEvent.click(getByLabelText('Cheddar'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on pizza veg change', () => {
    it('updates pizza veg checkboxes state', () => {
      const { getByLabelText } = render(<PizzaConstructor />);
      expect(getByLabelText('Tomato')).not.toBeChecked();
      expect(getByLabelText('Mushroom')).not.toBeChecked();
      expect(getByLabelText('Pepper')).not.toBeChecked();

      fireEvent.click(getByLabelText('Tomato'));
      fireEvent.click(getByLabelText('Mushroom'));
      expect(getByLabelText('Tomato')).toBeChecked();
      expect(getByLabelText('Mushroom')).toBeChecked();
      expect(getByLabelText('Pepper')).not.toBeChecked();
    });
    it('updates price correctly', () => {
      const { container, getByLabelText } = render(<PizzaConstructor />);

      fireEvent.click(getByLabelText('Tomato'));
      fireEvent.click(getByLabelText('Mushroom'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on pizza meat change', () => {
    it('updates pizza meat checkboxes state', () => {
      const { getByLabelText } = render(<PizzaConstructor />);
      expect(getByLabelText('Bacon')).not.toBeChecked();
      expect(getByLabelText('Pepperoni')).not.toBeChecked();
      expect(getByLabelText('Ham')).not.toBeChecked();

      fireEvent.click(getByLabelText('Bacon'));
      fireEvent.click(getByLabelText('Pepperoni'));
      expect(getByLabelText('Bacon')).toBeChecked();
      expect(getByLabelText('Pepperoni')).toBeChecked();
      expect(getByLabelText('Ham')).not.toBeChecked();
    });
    it('updates price correctly', () => {
      const { container, getByLabelText } = render(<PizzaConstructor />);

      fireEvent.click(getByLabelText('Bacon'));
      fireEvent.click(getByLabelText('Pepperoni'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on submit', () => {
    it('renders the selected ingredients list', () => {
      const { container, getByLabelText, getByRole } = render(
        <PizzaConstructor />
      );
      fireEvent.click(getByLabelText('Bacon'));
      fireEvent.click(getByLabelText('Pepperoni'));
      fireEvent.click(getByRole('button'));
      expect(container).toContainHTML('30, thin, tomato, bacon, pepperoni');
    });
  });

  describe('test reducers', () => {
    it('updates pizza size correctly', () => {
      const newState = reducer(
        {},
        {
          name: 'size',
          value: '30',
          isChecked: true,
        }
      );
      expect(newState.size).toBe('30');
    });

    it('updates pizza size correctly', () => {
      const newState = reducer(
        {},
        {
          name: 'size',
          value: '35',
          isChecked: true,
        }
      );
      expect(newState.size).toBe('35');
    });

    it('updates pizza base correctly', () => {
      const newState = reducer(
        {},
        {
          name: 'base',
          value: 'thin',
          isChecked: true,
        }
      );
      expect(newState.base).toBe('thin');
    });

    it('updates pizza base correctly', () => {
      const newState = reducer(
        {},
        {
          name: 'base',
          value: 'thick',
          isChecked: true,
        }
      );
      expect(newState.base).toBe('thick');
    });

    it('updates pizza sauce correctly', () => {
      const newState = reducer(
        {},
        {
          name: 'sauce',
          value: 'tomato',
          isChecked: true,
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
          name: 'cheese',
          value: 'mozarella',
          isChecked: true,
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
          name: 'veg',
          value: 'pepper',
          isChecked: true,
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
          name: 'meat',
          value: 'pepperoni',
          isChecked: true,
        }
      );
      expect(newState.meat).toStrictEqual(['bacon', 'pepperoni']);
    });
  });
});
