import PizzaComponent from './pizzaComponents/PizzaComponent';
import SignInPage from './accessComponents/SignInPage';
import SignOnPage from './accessComponents/SignOnPage';
import ErrorPage from './ErrorPage';

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
          <Link to="/signon">Sign On</Link>
        </p>
      </nav>
      <h1>Best Pizza in Town</h1>
      <Switch>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/signon">
          <SignOnPage />
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
