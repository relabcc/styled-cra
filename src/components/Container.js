import React from 'react';

import Box from './Box';
import { containerWidth } from './ThemeProvider/theme';

const Container = (props) => <Box {...props} />;

Container.defaultProps = {
  mx: 'auto',
  px: ['1em', null, '2em'],
  width: 1,
  maxWidth: containerWidth,
};

Container.displayName = 'Container';

export default Container;
