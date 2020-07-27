import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import get from 'lodash/get'

import { useInjectReducer } from '../../utils/injectReducer';
import reducer, { increment, decrement } from './reducer';

const key = 'counter'

const mapStateToProps = (state) => ({
  count: get(state, [key, 'count']),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment,
  decrement,
}, dispatch);


export const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default SubComp => withConnect(props => {
  useInjectReducer({ key, reducer });
  return <SubComp {...props} />
});
