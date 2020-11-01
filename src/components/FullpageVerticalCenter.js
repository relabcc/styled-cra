import React, { useState, useMemo, useContext } from 'react';
import sizeMe from 'react-sizeme'
import { withWindowSize } from 'libreact/modules/WindowSizeSensor';

import Box from './Box'
import theme from './ThemeProvider/theme'
import headerContext from '../contexts/header/context'
import useResponsive from '../contexts/mediaQuery/useResponsive'

const HeightAware = sizeMe({ monitorHeight: true, monitorWidth: false })(Box)

const Fullpage = ({ children, windowSize, ...props }) => {
  const [contentHeight, setContentHeight] = useState(0)
  const canFull = windowSize.height > contentHeight
  const { hideHeader } = useContext(headerContext)
  const { getCurrentValue } = useResponsive()
  const headerHeight = getCurrentValue(theme.headerHeight)

  return useMemo(() => (
    <Box
      height={canFull ? '100vh' : 'auto'}
      mt={!hideHeader && `-${headerHeight}`}
      pt={!hideHeader && headerHeight}
      {...props}
    >
      <Box position="relative" height={canFull ? '100%' : 'auto'}>
        <Box
          position={canFull && 'absolute'}
          top={canFull ? '50%' : 0}
          width="100%"
          transform={canFull && 'translateY(-50%)'}
        >
          <HeightAware onSize={(dims) => {
            if (typeof dims.height === 'number') {
              setContentHeight(dims.height)
            }
          }}>
            {children}
          </HeightAware>
        </Box>
      </Box>
    </Box>
  ), [canFull, hideHeader, children, props, headerHeight]);
};

export default withWindowSize(Fullpage);
