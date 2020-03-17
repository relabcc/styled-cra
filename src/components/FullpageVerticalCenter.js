import React, { useState, useMemo } from 'react';
import sizeMe from 'react-sizeme'
import { withWindowSize } from 'libreact/modules/WindowSizeSensor';

import Box from './Box'
import theme from './ThemeProvider/theme'

const HeightAware = sizeMe({ monitorHeight: true, monitorWidth: false })(Box)

const Fullpage = ({ noHeader, children, windowSize, ...props }) => {
  const [contentHeight, setContentHeight] = useState(0)
  const canFull = windowSize.height > contentHeight

  return useMemo(() => (
    <Box
      height={canFull ? '100vh' : 'auto'}
      mt={!noHeader && `-${theme.headerHeight}`}
      pt={!noHeader && theme.headerHeight}
      {...props}
    >
      <Box position="relative" height={canFull ? '100%' : 'auto'}>
        <Box
          position={canFull && 'absolute'}
          top={canFull ? '50%' : 0}
          width={1}
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
  ), [canFull, noHeader, children, props]);
};

export default withWindowSize(Fullpage);
