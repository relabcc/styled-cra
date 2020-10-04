import { useContext, useCallback } from 'react'
import isArray from 'lodash/isArray'

import MediaContext from './mediaContext'

import getResponsiveHelper from './getResponsiveHelper'

export default () => {
  const q = useContext(MediaContext)
  return {
    ...getResponsiveHelper(q),
    getCurrentValue: useCallback((resArr) => {
      if (!isArray(resArr)) {
        return resArr
      }
      let ff = q.findIndex(v => !v)
      if (ff === -1) ff = resArr.length - 1
      while (!resArr[ff]) {
        ff -= 1
      }
      return resArr[ff]
    }, [q]),
  }
}
