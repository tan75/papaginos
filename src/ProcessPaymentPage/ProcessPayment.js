import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../AuthContext';

const ProcessPayment = () => {
  const { signOut } = useAuth();
  const { handleSubmit, register } = useForm();

  console.log(register);

  const onSubmit = (data) => {
    alert('Your order is being placed...', data);
  };

  return (
    <div>
      <h2>Your Order</h2>
      <h3>Please enter your details to place your order</h3>
      <button onClick={signOut}>Sign Out</button>
      <form onSubmit={() => handleSubmit(onSubmit())}>
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
          <input {...register('cardHolderName')} />
        </div>
        <div>
          <label> Card Number </label>
          <input {...register('cardNumber')} />
        </div>
        <div>
          <label> Expiry Date</label>
          <input {...register('expiryDate')} />
        </div>
        <div>
          <label> CVV</label>
          <input {...register('cvv')} />
        </div>
        <button>Make Payment</button>
      </form>
    </div>
  );
};

export default ProcessPayment;
