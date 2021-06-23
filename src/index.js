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
import MediaProvider from './contexts/mediaQuery/MediaProvider'
import HeaderProvider from './contexts/header/Provider'

import App from './App';
import reportWebVitals from './reportWebVitals';

const initialState = {};
const store = creatStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider dispatch={store.dispatch}>
        <ThemeProvider>
          <MediaProvider>
            <ConnectedRouter history={history}>
              <HeaderProvider>
                <App />
              </HeaderProvider>
            </ConnectedRouter>
          </MediaProvider>
        </ThemeProvider>
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
