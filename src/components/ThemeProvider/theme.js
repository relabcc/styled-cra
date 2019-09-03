import merge from 'lodash/merge';
import range from 'lodash/range';
import mapValues from 'lodash/mapValues';

import colors from 'open-color/open-color.json';

const emToPx = (em) => `${em * 16}px`;

export const breakpoints = [22, 36, 48, 62, 90, 120].map(emToPx);
export const containerWidth = [22, 36, 46, 58].map(emToPx);
export const responsive = (mobile, desktop) => [mobile, null, null, desktop];

const generateFade = (r, g, b) => range(10, 100, 10)
  .reduce((fade, opacity) => merge(fade, { [opacity]: `rgba(${[r, g, b, opacity / 100].join()})` }), {});

const flatternColors = mapValues(colors, (listOfColors) => listOfColors[5]);

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

const white = '#fff';
const black = '#000';
const primary = 'blue';
const secondary = 'green';
const danger = 'red';

export default {
  colors: {
    ...flatternColors,
    white,
    black,
    text: black,
    primary: flatternColors[primary],
    primaryHover: colors[primary][9],
    primaryVariations: colors[primary],
    danger: flatternColors[danger],
    dangerHover: colors[danger][9],
    dangerVariations: colors[danger],
    secondary: flatternColors[secondary],
    secondaryHover: colors[secondary][9],
    secondaryVariations: colors[secondary],
    variations: colors,
    fade: {
      white: generateFade(255, 255, 255),
      black: generateFade(0, 0, 0),
    },
  },
  breakpoints,
  containerWidth,
  font,
  headerHeight: '5em',
  responsive,
  zOrder: range(4).map((i) => 10 ** i),
};
