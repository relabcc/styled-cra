import React from 'react';
import PropTypes from 'prop-types';

import { firebaseConnect } from 'react-redux-firebase';

class LogoutPage extends React.PureComponent {
  componentDidMount() {
    this.props.firebase.logout();
  }

  render() {
    return null;
  }
}

LogoutPage.propTypes = {
  firebase: PropTypes.shape({
    logout: PropTypes.func,
  }),
};

export default firebaseConnect()(LogoutPage);
