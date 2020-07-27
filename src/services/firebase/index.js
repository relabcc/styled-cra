import React from 'react'
import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'

import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import DataProvider from './DataProvider'
import config from './config.json';

// react-redux-firebase config
const rrfConfig = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  },
  createFirestoreInstance, // <- needed if using firestore
}

firebase.initializeApp(config)
firebase.firestore()

const FirebaseProvider = ({ children, ...props }) => (
  <ReactReduxFirebaseProvider {...props} {...rrfConfig}>
    <DataProvider>{children}</DataProvider>
  </ReactReduxFirebaseProvider>
)

export {
  firebase,
  FirebaseProvider,
};
