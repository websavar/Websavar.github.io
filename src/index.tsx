import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './assets/sass/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

reportWebVitals();
serviceWorker.unregister();
