import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../AuthContext';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const ProcessPayment = () => {
  const { signOut } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
          <input
            {...register('cardholderName', {
              required: {
                message: 'The cardholder name is required',
                value: true,
              },
              pattern: {
                message: 'Only letters are allowed',
                value: /^[A-Za-z]+$/i,
              },
              minLength: { message: 'Cardholder Name is too short', value: 1 },
              maxLength: { message: 'Cardholder Name is too long', value: 21 },
            })}
            placeholder="Name Surname"
          />
          {errors?.cardholderName && (
            <div>{errors?.cardholderName.message}</div>
          )}
        </div>
        <div>
          <label> Card Number </label>
          <input
            {...register('cardNumber', {
              required: {
                message: 'The card number is required',
                value: true,
              },
              minLength: {
                message: 'Should be 19 digits',
                value: 16,
              },
              maxLength: {
                message: 'Should be 19 digits',
                value: 16,
              },
            })}
            placeholder="Card number"
          />
          {errors?.cardNumber && <div>The Cardnumber field is required</div>}
        </div>
        <div>
          <label> Expiry Date</label>
          <input
            {...register('expiryDate', {
              required: {
                message: 'The expiry date is required',
                value: true,
              },
            })}
            placeholder="Expiry date"
          />
          {errors?.expiryDate && <div>The Expiry Date field is required</div>}
        </div>
        <div>
          <label> CVV</label>
          <input
            {...register('cvv', {
              required: {
                message: 'The CVV field is required',
                value: true,
              },
              minLength: 3,
              maxLength: 3,
            })}
            placeholder="CVV"
          />
          {errors?.cvv && <div>The CVV field is required</div>}
        </div>
        <button>Make Payment</button>
      </form>
    </div>
  );
};

export default ProcessPayment;
