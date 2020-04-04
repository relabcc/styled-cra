/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import history from '../utils/history';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    router: connectRouter(history),
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    ...injectedReducers,
  });
}
