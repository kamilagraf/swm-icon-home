import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import 'assets/styles/fonts.css';
import reportWebVitals from './reportWebVitals';
import AppProviders from 'providers/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
