import React from 'react';
import { render } from '@testing-library/react';
import ReceiptPage from './ReceiptPage';
import { AuthProvider } from '../pages/AuthContext';

describe('Receipt Page', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthProvider>
        <ReceiptPage />
      </AuthProvider>
    );
    expect(container).toContainHTML('Your Receipt');
  });
});
