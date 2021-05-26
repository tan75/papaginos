import React from 'react';
import { render } from '@testing-library/react';
import OrderPage from './OrderPage';
import { AuthProvider } from '../pages/AuthContext';

describe('order page', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthProvider>
        <OrderPage />
      </AuthProvider>
    );
    expect(container).toContainHTML('Your Order');
  });
});
