/* eslint-disable global-require */
import React, { useState, useCallback } from 'react'
import { IntlProvider } from 'react-intl'
import { useRouteMatch, useHistory } from 'react-router'

import LanguageContext from './LanguageContext'
import { defaultLocale, languages } from './locales'

// if (Intl) {
//   if (!Intl.PluralRules) {
//     require('@formatjs/intl-pluralrules/polyfill');
//     localeDataKeys.forEach(k => {
//       require(`@formatjs/intl-pluralrules/dist/locale-data/${k}`);
//     })
//   }

//   if (!Intl.RelativeTimeFormat) {
//     require('@formatjs/intl-relativetimeformat/polyfill');
//     localeDataKeys.forEach(k => {
//       require(`@formatjs/intl-relativetimeformat/dist/locale-data/${k}`);
//     })
//   }
// }

const LanguageProvider = ({ children }) => {
  const { params } = useRouteMatch()
  const history = useHistory()
  const [locale, setLocale] = useState(params.locale || defaultLocale)
  const handleChangeLocale = useCallback((newLocale) => {
    setLocale(newLocale)
    localStorage.setItem('REACT_APP_LANG', newLocale)
    history.push(`${window.location.pathname}${window.location.hash.replace(locale, newLocale)}`);
  }, [locale, history])

  return (
    <LanguageContext.Provider value={Object.assign({ changeLocale: handleChangeLocale }, { locale, languages })}>
      <LanguageContext.Consumer>
        {language => {
          const locale = language.locale || defaultLocale
          const messages = require(`./locales/${locale}.json`) // eslint-disable-line
          return (
            <IntlProvider locale={locale} messages={messages}>
              {children}
            </IntlProvider>
          )
        }}
      </LanguageContext.Consumer>
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
