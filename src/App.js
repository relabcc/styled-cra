import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout'
import HomePage from './containers/HomePage'
import AdminPage from './containers/Admin'
import LoginPage from './containers/Admin/Login'
import LogoutPage from './containers/Admin/Logout'
import NotFoundPage from './containers/NotFoundPage'

import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './services/firebase/authHelper'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin/login" component={userIsNotAuthenticatedRedir(LoginPage)} />
        <Route path="/admin/logout" component={userIsAuthenticatedRedir(LogoutPage)} />
        <Route path="/admin" component={userIsAuthenticatedRedir(AdminPage)} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}

export default App;
