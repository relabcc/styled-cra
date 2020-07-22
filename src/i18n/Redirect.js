import React, { useState, useEffect } from 'react'
import browserLang from 'browser-lang'
import { Redirect } from 'react-router-dom';

import { languages } from './index'

const langKeys = languages.map(language => language.value)

const I18nRedirect = ({ location: { pathname } }) => {
  const [detected] = useState(() => window.localStorage.getItem('REACT_APP_LANG') ||
    browserLang({
      languages: langKeys,
      fallback: 'zh-Hant-TW',
    }))
  useEffect(() => {
    window.localStorage.setItem('REACT_APP_LANG', detected)
  }, [])
  return <Redirect to={`/${detected}${pathname}`} />
}

export default I18nRedirect
