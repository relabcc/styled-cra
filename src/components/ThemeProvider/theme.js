import merge from 'lodash/merge';
import range from 'lodash/range';
import get from 'lodash/get';
import mapValues from 'lodash/mapValues';

import colors from 'open-color/open-color.json';

import memorize from '../../utils/memorize'

const baseFontSize = 16
const emToPx = (em) => `${em * baseFontSize}px`;

export const breakpoints = [22, 36, 48, 62, 90, 120].map(emToPx);
export const containerWidth = [22, 36, 46, 58].map(emToPx);
export const responsiveIndex = [
  [3, 'mobile'],
  [4, 'tablet'],
]

const responsiveMap = breakpoints.map((_, i) => {
  const id = responsiveIndex.findIndex(([ri]) => ri > i)
  return id >= 0 ? id : responsiveIndex.length
})

export const responsive = memorize((...args) => {
  const argsLen = args.length
  if (argsLen <= 1) return args[0]
  return breakpoints.map((_, i) => get(args, [responsiveMap[i]], null))
});

export const mobileOrDesktop = responsive

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
  fontSize: `${baseFontSize}px`,
  headerHeight: '5em',
  responsive,
  zOrder: range(4).map((i) => 10 ** i),
};
