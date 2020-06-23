import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
  display,
} from 'styled-system';
import { Link as RouterLink } from 'react-router-dom'
import shouldForwardProp from '@styled-system/should-forward-prop'

import { customColor } from './utils/getColor';

const NomalLink = styled.a.withConfig({ shouldForwardProp })`
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

const Link = ({ button, to, ...props }) => {
  if (to) {
    return (
      <NomalLink
        as={RouterLink}
        to={to}
        { ...props }
      />
    )
  }
  return (
    <NomalLink
      target="_blank"
      { ...props }
    />
  );
};


Link.displayName = 'Link';

Link.defaultProps = {
  fontWeight: 'bold',
  color: 'white',
  hoverColor: 'white',
};

export default Link;
