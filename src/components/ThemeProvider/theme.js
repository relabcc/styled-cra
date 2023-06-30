import { extendTheme, theme } from '@chakra-ui/react';
import get from 'lodash/get';
import breakpoints from './breakpoints';

export const containerWidth = [null, '48em', '60em', '80em'];

const font =
  'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

  const fonts = {
  heading: font,
  body: font,
  mono: 'Menlo, monospace',
};

const primary = 'blue';
const secondary = 'green';
const danger = 'red';

const overrides = {
  fonts,
  colors: {
    ...theme.colors,
    primary: get(theme.colors, `${primary}.500`),
    secondary: get(theme.colors, `${secondary}.500`),
    danger: get(theme.colors, `${danger}.500`),
    text: get(theme.colors, 'black'),
  },
  breakpoints,
  containerWidth,
  headerHeight: '5em',
};

const customTheme = extendTheme(overrides);

export default customTheme;
