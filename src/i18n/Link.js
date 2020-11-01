import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Link from '../components/Link'
import LanguageContext from './LanguageContext';

const I18nLink = ({ to, children, ...rest }) => {
  const { locale } = useContext(LanguageContext);
  const toWithLang = locale ? `/${locale}${to}` : `${to}`
  return (
    <Link to={toWithLang} {...rest}>
      {children}
    </Link>
  )
}

I18nLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

I18nLink.contextType = LanguageContext

export default I18nLink
