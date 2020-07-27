import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage'
import AdminPage from './containers/Admin'
import LoginPage from './containers/Admin/Login'
import LogoutPage from './containers/Admin/Logout'
import NotFoundPage from './containers/NotFoundPage'

import LanguageProvider from './i18n/LanguageProvider'
import Redirect from './i18n/Redirect'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './services/firebase/authHelper'

const withI18nProvider = SubComp => props => <LanguageProvider><SubComp {...props} /></LanguageProvider>

const paths = [
  { path: '/', component: HomePage, exact: true },
  { path: '/admin/login', component: userIsNotAuthenticatedRedir(LoginPage) },
  { path: '/admin/logout', component: userIsAuthenticatedRedir(LogoutPage) },
  { path: '/admin', component: userIsAuthenticatedRedir(AdminPage) },
]

function App() {
  return (
    <Switch>
      {paths.map((p, i) => (
        <Route
          key={`redirect-${i}`}
          exact
          path={p.path}
          component={withI18nProvider(Redirect)}
        />
      ))}
      {paths.map((p, i) => (
        <Route
          key={`locale-${i}`}
          path={`/:locale${p.path}`}
          component={withI18nProvider(p.component)}
          exact={p.exact}
        />
      ))}
      <Route path="" component={NotFoundPage} />
    </Switch>
  )
}


export default App;
