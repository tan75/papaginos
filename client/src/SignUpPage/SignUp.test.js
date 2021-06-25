import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './SignUp';

describe('Sign Up Page', () => {
  it('renders correctly', () => {
    const { container } = render(<SignUp />);
    expect(container).toContainHTML('Please register with Artem Pizza');
  });
});
