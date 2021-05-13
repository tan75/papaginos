import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoutes = ({ redirectPath, ...routeProps }) => {
  const authed = useAuth();
  return authed ? <Route {...routeProps} /> : <Redirect to={redirectPath} />;
};

export default PrivateRoutes;
