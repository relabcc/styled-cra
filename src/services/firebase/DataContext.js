import React, { createContext, PureComponent } from 'react'

const Context = createContext({
  addFirebaseListener: () => {},
  addFirestoreListener: () => {},
})

export default Context

export const withDataContext = SubComp => props => (
  <Context.Consumer>
    {(contextValues) => <SubComp {...props} {...contextValues} />}
  </Context.Consumer>
)

class FirebaseConnect extends PureComponent {
  static contextType = Context

 componentDidMount() {
    this.context.addFirebaseListener(this.props.keys)
  }

  render() {
    const { keys, SubComp, ...props } = this.props
    return <SubComp {...props} />
  }
}

export const withFirebaseConnect = keys => SubComp => props => <FirebaseConnect SubComp={SubComp} keys={keys} {...props} />

class FirestoreConnect extends PureComponent {
  static contextType = Context

  componentDidMount() {
    this.context.addFirestoreListener(this.props.keys)
  }

  render() {
    const { keys, SubComp, ...props } = this.props
    return <SubComp {...props} />
  }
}

export const withFirestoreConnect = keys => SubComp => props => <FirestoreConnect SubComp={SubComp} keys={keys} {...props} />
