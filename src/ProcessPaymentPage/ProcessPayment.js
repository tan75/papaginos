import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../AuthContext';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

const schema = yup.object().shape({
  // TODO cardType validation
  cardholderName: yup.string().required('Cardholder name is required'),
  cardNumber: yup.number().required('Card number is required'),
  expiryDate: yup.date().required('Expiry date is required'),
  cvv: yup.number().required('CVV is required'),
});

const ProcessPayment = () => {
  const { signOut } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const cardNumber = register('cardNumber');

  const onSubmit = (data) => {
    console.log('Your order is being placed...', data);
  };

  return (
    <div>
      <h2>Your Order</h2>
      <h3>Please enter your details to place your order</h3>
      <button onClick={signOut}>Sign Out</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input {...register('cardType')} type="radio" value="Visa" />
            Visa
          </label>
          <label>
            <input {...register('cardType')} type="radio" value="Mastercard" />
            Mastercard
          </label>
        </div>
        <div>
          <label> Cardholder Name </label>
          <input {...register('cardholderName')} placeholder="Name Surname" />
          <p>{errors.cardholderName?.message}</p>
        </div>
        <div>
          <label> Card Number </label>
          <input
            {...register('cardNumber')}
            placeholder="0000 0000 0000 0000"
            onChange={(event) => {
              cardNumber.onChange(event);
              event.target.value = normalizeCardNumber(event.target.value);
            }}
          />
          <p>{errors.cardNumber?.message}</p>
        </div>
        <div>
          <label> Expiry Date</label>
          <input {...register('expiryDate')} placeholder="Expiry date" />
          <p>{errors.expiryDate?.message}</p>
        </div>
        <div>
          <label> CVV</label>
          <input {...register('cvv')} placeholder="CVV" />
          <p>{errors.cvv?.message}</p>
        </div>
        <button>Make Payment</button>
      </form>
    </div>
  );
};

export default ProcessPayment;
