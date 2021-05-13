import PizzaComponent from './pizzaComponents/PizzaComponent';
import SignInPage from './accessComponents/SignInPage';
import SignUpPage from './accessComponents/SignUpPage';
import ErrorPage from './ErrorPage';
import OrderPage from './orderComponents/OrderPage';
import ReceiptPage from './orderComponents/ReceiptPage';
import OrdersPage from './orderComponents/OrdersPage';

import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <nav>
        <p>
          <Link to="/">Papa Gino's</Link>
        </p>
        <p>
          <Link to="/signin">Sign In</Link>
        </p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </nav>
      <h1>Best Pizza in Town</h1>
      <Switch>
        <Route path="/receipt">
          <ReceiptPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
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
