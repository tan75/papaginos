import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';
import { AuthProvider } from './AuthContext';

describe('Sign In Page', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AuthProvider>
        <SignIn />
      </AuthProvider>
    );
    expect(container).toContainHTML('Please enter your credentials to sign in');
  });
});
