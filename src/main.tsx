import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@unocss/reset/normalize.css';
import '@unocss/reset/eric-meyer.css';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
);
