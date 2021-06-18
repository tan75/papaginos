import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ProcessPayment from './ProcessPayment';
import { AuthProvider } from '../AuthContext';

describe('ProcessPayment', () => {
  it('renders correctly', () => {
    const { getByText, getByLabelText } = render(
      <AuthProvider>
        <ProcessPayment />
      </AuthProvider>
    );
    expect(getByLabelText('Visa')).toBeInTheDocument();
    expect(getByText('Mastercard')).toBeInTheDocument();
  });
});

describe('on submit', () => {
  it.todo('collects card number', async () => {
    const formSubmit = jest.fn().mockImplementation((data) => data);

    const { getByText, getByLabelText } = render(
      <AuthProvider>
        <ProcessPayment formSubmit={formSubmit} />
      </AuthProvider>
    );

    fireEvent.input(getByLabelText('CVV'), {
      target: { value: 111 },
    });

    await act(async () => {
      fireEvent.click(getByText('Make payment'));
    });

    //expect(formSubmit).toBeCalled();
  });
});
