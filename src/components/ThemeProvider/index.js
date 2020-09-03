import React, { Fragment } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Global } from '@emotion/core'

import globalStyles from './global-styles';

import theme from './theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <CSSReset />
      <Global styles={globalStyles} />
      {children}
    </Fragment>
  </ThemeProvider>
);
