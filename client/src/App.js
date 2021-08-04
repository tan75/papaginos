import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PizzaConstructor from './PizzaConstructorPage/PizzaConstructor';
import SignInPage from './SignInPage/SignIn';
import SignUpPage from './SignUpPage/SignUp';
import Page404 from './404Page/404Page';
import ReceiptPage from './ReceiptPage/ReceiptPage';
import OrdersPage from './OrdersPage/OrdersPage';
import PrivateRoute from './PrivateRoute';
import { usePizza } from './AppContext';
import ProcessPayment from './ProcessPaymentPage/ProcessPayment';

const App = () => {
  const { state, dispatch } = usePizza();

  return (
    <div className="App">
      {/* TODO to move navigation out into a component */}
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
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/receipt">Receipt</Link>
          </li>
          <li>
            {/* TODO to delete this once Process Payment is done */}
            <Link to="/processPayment">PP</Link>
          </li>
        </ul>
      </nav>
      <h1>Artem Pizza</h1>
      <Switch>
        <PrivateRoute path="/receipt" redirectPath="/signin">
          <ReceiptPage />
        </PrivateRoute>
        <PrivateRoute path="/processPayment" redirectPath="/signin">
          <ProcessPayment />
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
