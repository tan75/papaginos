import React from 'react';
import { render } from '@testing-library/react';
import OrdersPage from './OrdersPage';
import { AuthProvider } from '../pages/AuthContext';

describe('Orders Page', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthProvider>
        <OrdersPage />
      </AuthProvider>
    );
    expect(container).toContainHTML('Your Orders');
  });
});
