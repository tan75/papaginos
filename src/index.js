import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { AuthProvider } from './AuthContext';
import { PizzaProvider } from './AppContext';

Sentry.init({
  dsn: 'https://1d6c46ab9e1647f9a970888a5ef25235@o635742.ingest.sentry.io/5755850',
  release: process.env.REACT_APP_SENTRY_RELEASE,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <PizzaProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </PizzaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
