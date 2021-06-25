import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ redirectPath, ...routeProps }) => {
  const { authed } = useAuth();
  return authed ? <Route {...routeProps} /> : <Redirect to={redirectPath} />;
};

export default PrivateRoute;
