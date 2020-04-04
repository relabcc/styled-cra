import React from 'react';
import { Audio } from 'svg-loaders-react'

import Box from './Box';

const Loading = (props) => (
  <Box {...props}>
    <Audio
      color="currentColor"
      size={36}
    />
  </Box>
);

Loading.defaultProps = {
  color: 'primary',
};

export default Loading;
