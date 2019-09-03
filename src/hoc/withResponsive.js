import { connect } from 'react-redux';

export default (WrappedComp) => connect(({ browser }) => {
  return {
    browser,
    isMobile: browser.lessThan.md,
  };
})(WrappedComp);
