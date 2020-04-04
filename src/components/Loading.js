import React from 'react';
import { Audio } from 'svg-loaders-react'

import Box from './Box';

const Loading = (props) => (
  <Box {...props}>
    <Audio
      fill="currentColor"
      width="100%"
    />
  </Box>
);

Loading.defaultProps = {
  color: 'primary',
};

export default Loading;
