import { useContext } from 'react'
import last from 'lodash/last'

import MediaContext from './mediaContext'
import { responsiveIndex } from '../../components/ThemeProvider/theme';

export default () => {
  const q = useContext(MediaContext)
  return {
    isMobile: !q[responsiveIndex[0] - 1],
    isLaptop: !q[responsiveIndex[1] - 1],
    getCurrentValue: (resArr) => {
      const ff = q.findIndex(v => !v)
      return ff === -1 ? last(resArr) : resArr[ff]
    },
  }
}
