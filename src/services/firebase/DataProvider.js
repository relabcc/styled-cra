import React, { PureComponent, Fragment, createElement } from 'react'
import { firebaseConnect , firestoreConnect} from 'react-redux-firebase'
import produce, { enableMapSet } from 'immer'

import DataContext from './DataContext'

enableMapSet()

const CleanFragment = ({ children }) => <Fragment children={children} />

class DataProvider extends PureComponent {
  state = {
    firebaseKeys: new Map(),
    firestoreKeys: new Map(),
  }

  addFirebaseListener = (paths) => {
    this.setState(produce((draft) => {
      paths.forEach(key => draft.firebaseKeys.set(key, true));
    }))
  }

  addFirestoreListener = (paths) => {
    this.setState(produce((draft) => {
      paths.forEach(key => draft.firestoreKeys.set(key, true));
    }))
  }

  render() {
    const { firebaseKeys, firestoreKeys } = this.state
    let { children } = this.props
    if (firebaseKeys.size) {
      children = createElement(firebaseConnect(Array.from(firebaseKeys.keys()))(CleanFragment), { children })
    }
    if (firestoreKeys.size) {
      children = createElement(firestoreConnect(Array.from(firestoreKeys.keys()))(CleanFragment), { children })
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
