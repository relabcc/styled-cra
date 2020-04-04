import React, { PureComponent, Fragment, createElement } from 'react'
import { firebaseConnect , firestoreConnect} from 'react-redux-firebase'

import DataContext from './DataContext'

const CleanFragment = ({ children }) => <Fragment children={children} />

class DataProvider extends PureComponent {
  state = {
    firebaseKeys: new Map(),
    firestoreKeys: new Map(),
  }

  addFirebaseListener = (paths) => {
    this.setState(({ firebaseKeys }) => ({
      firebaseKeys: paths.reduce((keys, key) => keys.set(JSON.stringify(key), true), firebaseKeys),
    }))
  }

  addFirestoreListener = (paths) => {
    this.setState(({ firestoreKeys }) => ({
      firestoreKeys: paths.reduce((keys, key) => keys.set(JSON.stringify(key), true), firestoreKeys),
    }))
  }

  render() {
    const { firebaseKeys, firestoreKeys } = this.state
    let { children } = this.props
    if (firebaseKeys.size) {
      children = createElement(firebaseConnect(Array.from(firebaseKeys.keys()).map(JSON.parse))(CleanFragment), { children })
    }
    if (firestoreKeys.size) {
      children = createElement(firestoreConnect(Array.from(firestoreKeys.keys()).map(JSON.parse))(CleanFragment), { children })
    }
    return (
      <DataContext.Provider
        value={{
          addFirebaseListener: this.addFirebaseListener,
          addFirestoreListener: this.addFirestoreListener,
        }}
      >
        {children}
      </DataContext.Provider>
    )
  }
}

export default DataProvider
