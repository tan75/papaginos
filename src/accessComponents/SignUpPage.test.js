import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SignUpPage from './SignUpPage';

describe('Sign In Page', () => {
  it('renders correctly', () => {
    const { container } = render(<SignUpPage />);
    //expect(container).toContainHTML('Please enter your credentials to sign in');
  });
});
