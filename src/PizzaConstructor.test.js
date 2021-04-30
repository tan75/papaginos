import React from 'react';
import { render, getByLabelText, fireEvent } from '@testing-library/react';
import PizzaConstructor from './PizzaConstructor';
import reducer from './PizzaReducer';
import { statements } from '@babel/template';

describe('PizzaConstructor', () => {
  it('renders correctly', () => {
    const { container, getByTestId, getByLabelText } = render(
      <PizzaConstructor />
    );
    expect(container).toContainHTML('Size 30');
    expect(container).toContainHTML('Size 35');
    expect(container).toContainHTML('Thin');
    expect(getByLabelText('Thin')).toBeChecked();
    expect(container).toContainHTML('Thick');
    expect(container).toContainHTML('Tomato Sauce');
    expect(getByLabelText('Tomato Sauce')).toBeChecked();
    expect(container).toContainHTML('White Sauce');
    expect(container).toContainHTML('Spicy Sauce');
    expect(container).toContainHTML('Mozarella');
    expect(container).toContainHTML('Cheddar');
    expect(container).toContainHTML('Dor Blue');
    expect(getByTestId('vegTomato')).toContainHTML('tomato');
    expect(container).toContainHTML('Mushroom');
    expect(container).toContainHTML('Pepper');
    expect(container).toContainHTML('Bacon');
    expect(container).toContainHTML('Pepperoni');
    expect(container).toContainHTML('Ham');
    expect(container).toContainHTML('Total: 200');
  });

  describe('on pizza size change', () => {
    it('updates pizza size radio button state', () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId('size30')).toBeChecked();

      fireEvent.click(getByTestId('size35'));
      expect(getByTestId('size30')).not.toBeChecked();
      expect(getByTestId('size35')).toBeChecked();
    });
    it('updates price correctly', () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId('size35'));
      expect(container).toContainHTML('Total: 250');
    });
  });

  describe('on pizza base change', () => {
    it('updates pizza base radio button state', () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId('baseThin')).toBeChecked();

      fireEvent.click(getByTestId('baseThick'));
      expect(getByTestId('baseThin')).not.toBeChecked();
      expect(getByTestId('baseThick')).toBeChecked();
    });
    it('it does not change the price', () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId('baseThick'));
      expect(container).toContainHTML('Total: 200');
    });
  });

  describe('on pizza sauce change', () => {
    it('updates pizza sauce radio button state', () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId('sauceTomato')).toBeChecked();

      fireEvent.click(getByTestId('sauceWhite'));
      expect(getByTestId('sauceTomato')).not.toBeChecked();
      expect(getByTestId('sauceSpicy')).not.toBeChecked();
      expect(getByTestId('sauceWhite')).toBeChecked();

      fireEvent.click(getByTestId('sauceSpicy'));
      expect(getByTestId('sauceWhite')).not.toBeChecked();
      expect(getByTestId('sauceTomato')).not.toBeChecked();

      expect(getByTestId('sauceSpicy')).toBeChecked();
    });
    it('does not change the price', () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId('sauceWhite'));
      expect(container).toContainHTML('Total: 200');
    });
  });

  describe('on pizza cheese change', () => {
    it('updates pizza cheese checkboxes state', () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId('cheeseMozarella')).not.toBeChecked();
      expect(getByTestId('cheeseCheddar')).not.toBeChecked();
      expect(getByTestId('cheeseDorBlue')).not.toBeChecked();

      fireEvent.click(getByTestId('cheeseMozarella'));
      fireEvent.click(getByTestId('cheeseCheddar'));
      expect(getByTestId('cheeseMozarella')).toBeChecked();
      expect(getByTestId('cheeseCheddar')).toBeChecked();
      expect(getByTestId('cheeseDorBlue')).not.toBeChecked();
    });

    it('updates price correctly', () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId('cheeseMozarella'));
      fireEvent.click(getByTestId('cheeseCheddar'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on pizza veg change', () => {
    it('updates pizza veg checkboxes state', () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId('vegTomato')).not.toBeChecked();
      expect(getByTestId('vegMushroom')).not.toBeChecked();
      expect(getByTestId('vegPepper')).not.toBeChecked();

      fireEvent.click(getByTestId('vegTomato'));
      fireEvent.click(getByTestId('vegMushroom'));
      expect(getByTestId('vegTomato')).toBeChecked();
      expect(getByTestId('vegMushroom')).toBeChecked();
      expect(getByTestId('vegPepper')).not.toBeChecked();
    });
    it('updates price correctly', () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId('vegTomato'));
      fireEvent.click(getByTestId('vegMushroom'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on pizza meat change', () => {
    it('updates pizza meat checkboxes state', () => {
      const { getByTestId } = render(<PizzaConstructor />);
      expect(getByTestId('meatBacon')).not.toBeChecked();
      expect(getByTestId('meatPepperoni')).not.toBeChecked();
      expect(getByTestId('meatHam')).not.toBeChecked();

      fireEvent.click(getByTestId('meatBacon'));
      fireEvent.click(getByTestId('meatPepperoni'));
      expect(getByTestId('meatBacon')).toBeChecked();
      expect(getByTestId('meatPepperoni')).toBeChecked();
      expect(getByTestId('meatHam')).not.toBeChecked();
    });
    it('updates price correctly', () => {
      const { container, getByTestId } = render(<PizzaConstructor />);

      fireEvent.click(getByTestId('meatBacon'));
      fireEvent.click(getByTestId('meatPepperoni'));
      expect(container).toContainHTML('Total: 258');
    });
  });

  describe('on submit', () => {
    it('renders the selected ingredients list', () => {
      const { container, getByTestId, getByRole } = render(
        <PizzaConstructor />
      );
      fireEvent.click(getByTestId('meatBacon'));
      fireEvent.click(getByTestId('meatPepperoni'));
      fireEvent.click(getByRole('button'));
      expect(container).toContainHTML(
        '30, thin, tomato sauce, bacon, pepperoni'
      );
    });
  });

  describe('test reducers', () => {
    it('updates pizza size correctly', () => {
      const newState = reducer({}, { type: 'SELECT_PIZZA_SIZE_30' });
      expect(newState.size).toBe(30);
    });

    it('updates pizza size correctly', () => {
      const newState = reducer({}, { type: 'SELECT_PIZZA_SIZE_35' });
      expect(newState.size).toBe(35);
    });

    it('updates pizza base correctly', () => {
      const newState = reducer({}, { type: 'SELECT_PIZZA_BASE_THIN' });
      expect(newState.base).toBe('thin');
    });

    it('updates pizza base correctly', () => {
      const newState = reducer({}, { type: 'SELECT_PIZZA_BASE_THICK' });
      expect(newState.base).toBe('thick');
    });

    it('updates pizza sauce correctly', () => {
      const newState = reducer({}, { type: 'SELECT_PIZZA_SAUCE_TOMATO' });
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
        { type: 'SELECT_PIZZA_CHEESE_MOZARELLA' }
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
        { type: 'SELECT_PIZZA_VEG_PEPPER' }
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
        { type: 'SELECT_PIZZA_MEAT_PEPPERONI' }
      );
      expect(newState.meat).toStrictEqual(['bacon', 'pepperoni']);
    });
  });
});
