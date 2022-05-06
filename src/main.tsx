import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@unocss/reset/normalize.css';
import '@unocss/reset/eric-meyer.css';
import '@unocss/reset/tailwind.css';
import 'uno.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
