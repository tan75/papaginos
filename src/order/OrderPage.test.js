import React from 'react';
import { render } from '@testing-library/react';
import OrderPage from './OrderPage';

describe('order page', () => {
  it.skip('renders correctly', () => {
    const { container } = render(<OrderPage />);
    expect(container).toContainHTML('Your Order');
  });
});
