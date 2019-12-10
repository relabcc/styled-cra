import React, { useState } from 'react';
import sizeMe from 'react-sizeme'
import { withWindowSize } from 'libreact/modules/WindowSizeSensor';

import Box from './Box'
import theme from './ThemeProvider/theme'

const HeightAware = sizeMe({ monitorHeight: true, monitorWidth: false })(Box)

const Fullpage = ({ noHeader, children, windowSize, ...props }) => {
  const [dims, setDims] = useState({})
  const canFull = windowSize.height > dims.height

  return (
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
  );
};

export default withWindowSize(Fullpage);
