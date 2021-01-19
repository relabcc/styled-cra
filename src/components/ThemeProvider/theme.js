import { theme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import memoizeOne from 'memoize-one';
import get from 'lodash/get';

export const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
})

export const responsiveIndex = [
  [2, 'mobile'],
  [3, 'tablet'],
]

const responsiveMap = breakpoints.map((_, i) => {
  const id = responsiveIndex.findIndex(([ri]) => ri + 1 > i)
  return id >= 0 ? id : responsiveIndex.length
})

export const responsive = memoizeOne((...args) => {
  const argsLen = args.length
  if (argsLen <= 1) return args[0]
  return breakpoints.map((_, i) => get(args, [responsiveMap[i]], null))
});

export const mobileOrDesktop = responsive

export const containerWidth = ["26em", "44em", "58em", "76em"];
export const containerPadding = responsive('1em', '2em')

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';
const fonts = {
  heading: font,
  body: font,
  mono: "Menlo, monospace",
}

const primary = 'blue'
const secondary = 'green'
const danger = 'red'

const overrides = {
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
}

const customTheme = extendTheme(overrides)

export default customTheme
