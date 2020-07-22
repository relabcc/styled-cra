import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Link from '../components/Link'
import LanguageContext from './LanguageContext';

class I18nLink extends PureComponent {
  render() {
    const { to, children, ...rest } = this.props;
    const { locale } = this.context;
      const toWithLang = locale ? `/${locale}${to}` : `${to}`
    return (
      <Link to={toWithLang} {...rest}>
        {children}
      </Link>
    )
  }
}

I18nLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

I18nLink.contextType = LanguageContext

export default I18nLink
