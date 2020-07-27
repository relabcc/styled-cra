import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage'
import NotFoundPage from './containers/NotFoundPage'

import Redirect from './i18n/Redirect'

const paths = [
  { path: '/', component: HomePage, exact: true },
]

function App() {
  return (
    <Switch>
      {paths.map((p, i) => (
        <Route
          key={`redirect-${i}`}
          exact
          path={p.path}
          component={Redirect}
        />
      ))}
      {paths.map((p, i) => (
        <Route
          key={`locale-${i}`}
          path={`/:locale${p.path}`}
          component={p.component}
          exact={p.exact}
        />
      ))}
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
