import React from 'react';

const signIn = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Signing in...');
      }}
    >
      <p>Please enter your credentials to sign in</p>
      <label htmlFor="userEmail">Your email</label>
      <br />
      <input type="email" />
      <br />
      <label htmlFor="userPassword">Your password</label>
      <br />
      <input type="password" />
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default signIn;
