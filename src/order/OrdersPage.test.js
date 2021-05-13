import React from 'react';
import { render } from '@testing-library/react';
import OrdersPage from './OrdersPage';

describe('Orders Page', () => {
  it('renders correctly', () => {
    const { container } = render(<OrdersPage />);
    expect(container).toContainHTML('Your Orders');
  });
});