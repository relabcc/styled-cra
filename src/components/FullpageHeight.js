import React, { useState, useMemo, useContext } from 'react';
import sizeMe from 'react-sizeme'
import { useWindowSize } from 'react-use'

import Box from './Box'
import theme from './ThemeProvider/theme'
import headerContext from '../contexts/header/context'
import useResponsive from '../contexts/mediaQuery/useResponsive'

const HeightAware = sizeMe({ monitorHeight: true, monitorWidth: false })(Box)

const Fullpage = ({ children, ...props }) => {
  const windowSize = useWindowSize()
  const [dims, setDims] = useState({})
  const { hideHeader } = useContext(headerContext)
  const { getCurrentValue } = useResponsive()
  const canFull = windowSize.height > dims.height
  const headerHeight = getCurrentValue(theme.headerHeight)

  return useMemo(() => (
    <Box
      height={canFull ? '100vh' : 'auto'}
      mt={!hideHeader && `-${headerHeight}`}
      pt={!hideHeader && headerHeight}
      {...props}
    >
      <HeightAware onSize={setDims} height={canFull ? '100%' : 'auto'}>
        {children}
      </HeightAware>
    </Box>
  ), [canFull, hideHeader, headerHeight, children, props]);
};

export default Fullpage;
