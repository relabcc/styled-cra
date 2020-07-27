import { createElement } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import pick from 'lodash/pick';
import get from 'lodash/get';
import set from 'lodash/set';
import { withFirebase } from 'react-redux-firebase';

import { withFirebaseConnect, withFirestoreConnect } from './DataContext'

export const selectFirebaseState = state => state.firebase;
export const selectFirestoreState = state => state.firestore;

export const selectFirebase = keyList => {
  const selector = createSelector(selectFirebaseState, firebase =>
    pick(firebase, keyList),
  );
  return compose(
    withFirebase,
    connect(selector),
  );
};

export const selectFirebaseData = keyList => {
  const selector = createSelector(selectFirebaseState, firebase =>
    keyList.reduce((selected, key) => {
      if (isObject(key)) {
        const { path, queryParams, storeAs } = key;
        if (path) {
          if (storeAs) {
            return Object.assign(selected, {
              [storeAs]: firebase.data[storeAs],
            });
          }
          if (queryParams)
            return Object.assign(selected, { [path]: firebase.data[path] });
        }
        return selected;
      }
      return Object.assign(selected, {
        [key]: get(firebase, ['data', ...key.split('/')]),
      });
    }, {}),
  );

  return compose(
    withFirebaseConnect(keyList),
    connect(selector),
  );
};

export const selectFirestore = (keyList, asArray) => {
  const storeKey = asArray ? 'ordered' : 'data'
  const selector = createSelector(selectFirestoreState, firestore =>
    keyList.reduce((selected, key) => {
      if (isObject(key)) {
        if (key.storeAs) {
          return set(
            selected,
            key.storeAs,
            get(firestore, [storeKey, key.storeAs]),
          );
        }
        return set(
          selected,
          key.collection,
          get(firestore, [storeKey, key.collection]),
        );
      }
      return set(selected, key, get(firestore, [storeKey, ...key.split('/')]));
    }, {}),
  );

  const connectWithAuth = SubComp => props => {
    const bindAuth = cond => {
      if (isArray(cond[0])) return cond.map(bindAuth);
      return cond.map(c => (isFunction(c) ? c(props.auth) : c));
    };
    const keyListWithAuth = keyList.map(key => {
      if (isObject(key) && key.where) {
        return Object.assign({}, key, { where: bindAuth(key.where) });
      }
      return key;
    });
    return createElement(withFirestoreConnect(keyListWithAuth)(SubComp), props);
  };

  return compose(
    selectFirebase(['auth']),
    connectWithAuth,
    connect(selector),
  );
};
