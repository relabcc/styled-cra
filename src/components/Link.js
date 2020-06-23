import styled, { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
  display,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop'

import { customColor } from './utils/getColor';
import isToAs from './utils/isToAs'

const linkStyle = css`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${display}
  text-decoration: none;
  ${({ disabled }) => disabled && `
    pointer-events: none;
  `}
  &:hover {
    ${customColor('hoverColor')};
  }
`;

const Link = isToAs(styled.a.withConfig({ shouldForwardProp })`
  ${linkStyle}
`);

Link.displayName = 'Link';

Link.defaultProps = {
  fontWeight: 'bold',
  target: '_blank',
};

export default Link;
