import React from 'react';
import { render } from '@testing-library/react';
import IngredientsLayout from './IngredientsLayout';
import { initialOrderState } from '../state/initialOrderState';

describe('IngredientsLayout', () => {
  it.only('renders correctly', () => {
    const handleChange = () => '';
    const { container, getByDisplayValue } = render(
      <IngredientsLayout
        state={initialOrderState}
        handleChange={handleChange}
      />
    );
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
  });
});
