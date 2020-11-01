import React, { Fragment } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Global } from '@emotion/core'

import globalStyles from './global-styles';

import theme from './theme';

const ReThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <CSSReset />
      <Global styles={globalStyles} />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default ReThemeProvider
