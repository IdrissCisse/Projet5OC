import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRouter from './components/Router';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
reportWebVitals();
