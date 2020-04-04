import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './utils/history';
import creatStore from './stores/createStore';
import ThemeProvider from './components/ThemeProvider'
import { FirebaseProvider } from './services/firebase/index'
import DataProvider from './services/firebase/DataProvider'
import MediaProvider from './contexts/mediaQuery/MediaProvider'

import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {};
const store = creatStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <MediaProvider>
        <FirebaseProvider dispatch={store.dispatch}>
          <DataProvider>
            <ConnectedRouter history={history}>
              <App />
            </ConnectedRouter>
          </DataProvider>
        </FirebaseProvider>
      </MediaProvider>
    </ThemeProvider>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
