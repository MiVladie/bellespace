import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './reset.css';

import { configureStore as configureStorePages } from './hooks-store/pages-store';
import { configureStore as configureStoreStyles } from './hooks-store/styles-store';

configureStorePages();
configureStoreStyles();

ReactDOM.render(
  <React.StrictMode>
    <Router basename = { process.env.PUBLIC_URL }>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);