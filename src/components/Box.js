import React from 'react';
import styled from 'styled-components';
import shouldForwardProp from '@styled-system/should-forward-prop'
import {
  space,
  layout,
  typography,
  position,
  color,
  borderRadius,
  zIndex,
  border,
  flex,
  opacity,
  style,
} from 'styled-system';

import injectProps from './utils/injectProps';
import isToAs from './utils/isToAs'

const Box = isToAs(styled.div.withConfig({ shouldForwardProp })`
  ${space}
  ${layout}
  ${position}
  ${typography}
  ${color}
  ${position}
  ${zIndex}
  ${border}
  ${flex}
  ${borderRadius}
  ${opacity}
  ${injectProps('whiteSpace')}
  ${injectProps('overflow')}
  ${injectProps('transform')}
  ${injectProps('transition')}
  ${style({
    prop: 'zOrder',
    cssProperty: 'zIndex',
    key: 'zOrder',
  })}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`);

Box.displayName = 'Box';

Box.inline = (props) => <Box as="span" display="inline-block" verticalAlign="middle" {...props} />;

export default Box;
