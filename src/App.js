import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PizzaConstructor from './PizzaConstructor';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import Page404 from './pages/404Page';
import OrderPage from './order/OrderPage';
import ReceiptPage from './order/ReceiptPage';
import OrdersPage from './order/OrdersPage';
import PrivateRoute from './pages/PrivateRoute';
import { usePizza } from './AppContext';

const App = () => {
  const { state, dispatch } = usePizza();

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Artem Pizza</Link>
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
      <h1>Artem Pizza</h1>
      <Switch>
        <PrivateRoute path="/receipt" redirectPath="/signin">
          <ReceiptPage />
        </PrivateRoute>
        <PrivateRoute path="/order" redirectPath="/signin">
          <OrderPage />
        </PrivateRoute>
        <PrivateRoute path="/orders" redirectPath="/signin">
          {/* TODO fetch order by id*/}
          <OrdersPage />
        </PrivateRoute>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/">
          <PizzaConstructor state={state} dispatch={dispatch} />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
