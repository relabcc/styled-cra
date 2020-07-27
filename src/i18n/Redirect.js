import React, { useEffect } from 'react'
import browserLang from 'browser-lang'
import { Redirect, useLocation } from 'react-router-dom';

import { languages } from './index'

const langKeys = languages.map(language => language.value)

const I18nRedirect = () => {
  const { pathname } = useLocation()
  const detected = window.localStorage.getItem('REACT_APP_LANG') ||
    browserLang({
      languages: langKeys,
      fallback: 'zh-Hant-TW',
    })

  // componentDidMount
  useEffect(() => {
    window.localStorage.setItem('REACT_APP_LANG', detected)
  }, [])
  return <Redirect to={`/${detected}${pathname}`} />
}

export default I18nRedirect
