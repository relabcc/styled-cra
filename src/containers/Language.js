import React, { useContext } from 'react'

import LanguageContext from '../i18n/LanguageContext';

const Language = () => {
  const { locale, changeLocale, languages } = useContext(LanguageContext)
  return (
    <select value={locale} onChange={e => changeLocale(e.target.value)}>
      {languages.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}

export default Language
