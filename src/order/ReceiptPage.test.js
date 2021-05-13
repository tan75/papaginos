import React from 'react';
import { render } from '@testing-library/react';
import ReceiptPage from './ReceiptPage';

describe('Receipt Page', () => {
  it('renders correctly', () => {
    const { container } = render(<ReceiptPage />);
    expect(container).toContainHTML('Your Receipt');
  });
});
