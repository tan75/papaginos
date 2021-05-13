import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SignInPage from './SignInPage';

describe('Sign In Page', () => {
  it.skip('renders correctly', () => {
    const { container } = render(<SignInPage />);
    expect(container).toContainHTML('Please enter your credentials to sign in');
  });
});
