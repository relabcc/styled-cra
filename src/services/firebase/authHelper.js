import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

import { selectFirebaseState } from './selectors';
import FullpageLoading from '../../components/FullpageLoading';

const authenticatingSelector = (state) => {
  const { auth, profile, isInitializing } = selectFirebaseState(state);
  return isInitializing === true || !auth.isLoaded || !profile.isLoaded;
};

const userIsAuthenticatedDefaults = {
  authenticatingSelector,
  authenticatedSelector: (state) => {
    const { auth } = selectFirebaseState(state);
    return !auth.isEmpty;
  },
  AuthenticatingComponent: FullpageLoading,
  wrapperDisplayName: 'UserIsAuthenticated'
}

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults)

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  redirectPath: '/admin/login',
});

const userIsNotAuthenticatedDefaults = {
  authenticatingSelector,
  authenticatedSelector: (state) => {
    const { auth } = selectFirebaseState(state);
    return auth.isEmpty;
  },
  AuthenticatingComponent: FullpageLoading,
  wrapperDisplayName: 'UserIsNotAuthenticated',
}

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults)

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: '/admin',
  allowRedirectBack: false,
});
