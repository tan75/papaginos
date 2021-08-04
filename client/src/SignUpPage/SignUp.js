import React from 'react';
import Button from '../components/Button/Button';

const signUp = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Signing Up...');
      }}
    >
      <p>Please register with Artem Pizza</p>
      <label htmlFor="userEmail">Your email</label>
      <br />
      <input type="email" />
      <br />
      <label htmlFor="userPassword">Your password</label>
      <br />
      <input type="password" />
      <br />
      <label htmlFor="userAddress">Your delivery address</label>
      <br />
      <input type="text" />
      <br />
      <Button />
    </form>
  );
};

export default signUp;
