import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage'
import AdminPage from './containers/Admin'
import LoginPage from './containers/Admin/Login'
import LogoutPage from './containers/Admin/Logout'
import NotFoundPage from './containers/NotFoundPage'
import Layout from './containers/Layout'

import Redirect from './i18n/Redirect'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './services/firebase/authHelper'

const paths = [
  { path: '/', component: HomePage, exact: true },
  { path: '/admin/login', component: userIsNotAuthenticatedRedir(LoginPage) },
  { path: '/admin/logout', component: userIsAuthenticatedRedir(LogoutPage) },
  { path: '/admin', component: userIsAuthenticatedRedir(AdminPage) },
]

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}


export default App;
