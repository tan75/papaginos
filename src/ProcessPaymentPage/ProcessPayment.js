import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../AuthContext';

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
            {...register('cardholderName', { required: true, minLength: 1 })}
            placeholder="Name Surname"
          />
          {errors?.cardholderName && (
            <div>The Cardholer Name field is required</div>
          )}
        </div>
        <div>
          <label> Card Number </label>
          <input {...register('cardNumber')} placeholder="Card number" />
        </div>
        <div>
          <label> Expiry Date</label>
          <input {...register('expiryDate')} placeholder="Expiry date" />
        </div>
        <div>
          <label> CVV</label>
          <input {...register('cvv')} placeholder="CVV" />
        </div>
        <button>Make Payment</button>
      </form>
    </div>
  );
};

export default ProcessPayment;
