import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SignUpPage from './SignUpPage';

describe('Sign Up Page', () => {
  it('renders correctly', () => {
    const { container } = render(<SignUpPage />);
    expect(container).toContainHTML('Please register with Papa Ginos');
  });
});
