import React from 'react';
import { Router } from 'react-router-dom';
import App from '../App';
import Navigation from './Navigation';
import { render, getByText, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

describe('Navigation', () => {
  describe('On `Artem Pizza` link click', () => {
    it('Navigates to `Artem Pizza Page`', () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <App />
        </Router>
      );
      expect(container.innerHTML).toMatch('Artem Pizza');
    });
  });

  describe('On `Artem Pizza` link click', () => {
    it.todo('Navigates to `Artem Pizza Page`');
  });

  describe('On `Sign In` link click', () => {
    it.skip('Navigates to `Sign In`', () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <Navigation />
        </Router>
      );
      fireEvent.click(getByText('Sign In'));
      expect(container.innerHTML).toMatch('Sign in');
    });
  });

  describe('On `Sign Up` link click', () => {
    it.todo('Navigates to `Sign Up`');
  });

  describe('On `Order` link click', () => {
    it.todo('Navigates to `Order`');
  });

  describe('On `Orders` link click', () => {
    it.todo('Navigates to `Orders`');
  });

  describe('On `Receipt` link click', () => {
    it.todo('Navigates to `Receipt`');
  });

  describe('with an unsupported URL', () => {
    it.todo('shows 404 page');
  });
});
