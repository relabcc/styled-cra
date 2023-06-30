import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { hydrate, render } from 'react-dom';

import ThemeProvider from './components/ThemeProvider';
import HeaderProvider from './contexts/header/Provider';

import App from './App';
// import reportWebVitals from './reportWebVitals';

const app = (
  <React.StrictMode>
    <ThemeProvider>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </ThemeProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
