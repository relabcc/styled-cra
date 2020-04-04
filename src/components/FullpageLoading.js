import React from 'react';

import Box from './Box';
import Loading from './Loading';

const FullpageLoading = () => (
  <Box
    position="fixed"
    top="0"
    left="0"
    right="0"
    bottom="0"
    bg="rgba(255, 255, 255, 0.8)"
    zOrder={3}
  >
    <Loading
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
      width="2.5em"
    />
  </Box>
);

export default FullpageLoading;
