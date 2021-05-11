import React from 'react';

const signOn = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Signing On...');
      }}
    >
      <p>Please register with Papa Gino's</p>
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
      <button type="submit">Sign On</button>
    </form>
  );
};

export default signOn;
