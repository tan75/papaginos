import React from 'react';
import { useAuth } from '../access/AuthContext';

const SignInPage = () => {
  const { signIn } = useAuth();
  return (
    <div>
      <button onClick={signIn}>Sign In</button>
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
        {/* <button type="submit">Sign In</button> */}
      </form>
    </div>
  );
};

export default SignInPage;
