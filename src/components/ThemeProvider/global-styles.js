import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`
  body {
    font-family: ${theme.font};
    font-size: ${theme.fontSize};
    min-width: 100%;
    min-height: 100%;
  }
`;
