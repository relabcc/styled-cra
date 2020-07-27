import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux';

import creatStore from './stores/createStore';
import ThemeProvider from './components/ThemeProvider'
import MediaProvider from './contexts/mediaQuery/MediaProvider'
import history from './utils/history'

import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {};
const store = creatStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <MediaProvider>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </MediaProvider>
    </ThemeProvider>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
