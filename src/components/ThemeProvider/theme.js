import { theme } from "@chakra-ui/core";

import get from 'lodash/get';

import memorize from '../../utils/memorize'

export const breakpoints = ["30em", "48em", "62em", "80em"];
export const containerWidth = ["26em", "44em", "58em", "76em"];
export const responsiveIndex = [
  [2, 'mobile'],
  [3, 'tablet'],
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

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';
const fonts = {
  heading: font,
  body: font,
  mono: "Menlo, monospace",
}

const primary = 'blue'
const secondary = 'green'
const danger = 'red'

export default {
  ...theme,
  fonts,
  colors: {
    ...theme.colors,
    primary: get(theme.colors, `${primary}.400`),
    secondary: get(theme.colors, `${secondary}.400`),
    danger: get(theme.colors, `${danger}.400`),
    text: get(theme.colors, 'black'),
  },
  breakpoints,
  containerWidth,
  headerHeight: '6em',
};
