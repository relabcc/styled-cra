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
import tag from 'clean-tag';
import { Link as RouterLink } from 'react-router-dom'

import blacklist from './utils/blacklist';
import { customColor } from './utils/getColor';

const NomalLink = styled(tag)`
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
        is={RouterLink}
        to={to}
        { ...props }
      />
    )
  }
  return (
    <NomalLink
      is="a"
      target="_blank"
      { ...props }
    />
  );
};

Link.displayName = 'Link';

Link.defaultProps = {
  blacklist,
  fontWeight: 'bold',
  color: 'white',
  hoverColor: 'white',
};

export default Link;
