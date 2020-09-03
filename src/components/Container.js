import React from 'react';

import Box from './Box';
import { containerWidth, responsive } from './ThemeProvider/theme';

const Container = (props) => <Box {...props} />;

Container.defaultProps = {
  mx: 'auto',
  px: responsive('1em', '2em'),
  maxWidth: containerWidth,
};

Container.displayName = 'Container';

export default Container;
