import React, { useState, useMemo } from 'react';
import sizeMe from 'react-sizeme'
import { withWindowSize } from 'libreact/modules/WindowSizeSensor';

import Box from './Box'
import theme from './ThemeProvider/theme'

const HeightAware = sizeMe({ monitorHeight: true, monitorWidth: false })(Box)

const Fullpage = ({ noHeader, children, windowSize, ...props }) => {
  const [dims, setDims] = useState({})
  const canFull = windowSize.height > dims.height

  return useMemo(() => (
    <Box
      height={canFull ? '100vh' : 'auto'}
      mt={!noHeader && `-${theme.headerHeight}`}
      pt={!noHeader && theme.headerHeight}
      {...props}
    >
      <HeightAware onSize={setDims} height={canFull ? '100%' : 'auto'}>
        {children}
      </HeightAware>
    </Box>
  ), [canFull, noHeader, children, props]);
};

export default withWindowSize(Fullpage);
