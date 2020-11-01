import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import ThemeProvider from './components/ThemeProvider'
import MediaProvider from './contexts/mediaQuery/MediaProvider'
import LanguageProvider from './i18n/LanguageProvider'
import HeaderProvider from './contexts/header/Provider'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider>
    <MediaProvider>
      <HashRouter>
        <HeaderProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </HeaderProvider>
      </HashRouter>
    </MediaProvider>
  </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
