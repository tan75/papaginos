import React from 'react';
import PizzaComponent from './pizzaComponents/PizzaComponent';
import SignInPage from './access/SignInPage';
import SignUpPage from './access/SignUpPage';
import ErrorPage from './ErrorPage';
import OrderPage from './order/OrderPage';
import ReceiptPage from './order/ReceiptPage';
import OrdersPage from './order/OrdersPage';
import PrivateRoute from './access/PrivateRoute';

import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Papa Ginos</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/receipt">Receipt</Link>
          </li>
        </ul>
      </nav>
      <h1>Best Pizza in Town</h1>
      <Switch>
        <PrivateRoute path="/receipt" redirectPath="/signin">
          <ReceiptPage />
        </PrivateRoute>
        <PrivateRoute path="/order" redirectPath="/signin">
          <OrderPage />
        </PrivateRoute>
        <PrivateRoute path="/orders" redirectPath="/signin">
          <OrdersPage />
        </PrivateRoute>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <PizzaComponent />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
