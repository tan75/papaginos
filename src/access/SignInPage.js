import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../access/AuthContext';

const SignInPage = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const handleLogIn = () => {
    signIn();
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleLogIn}>
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
    </div>
  );
};

export default SignInPage;
