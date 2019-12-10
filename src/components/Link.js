import React from 'react';
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
import tag from 'clean-tag';

import blacklist from './utils/blacklist';
import { customColor } from './utils/getColor';

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

const NomalLink = styled(tag)`
  ${linkStyle}
`;


const Link = ({ button, blacklist, ...props }) => {
  return (
    <NomalLink
      is="a"
      target="_blank"
      blacklist={blacklist}
      { ...props }
    />
  );
};

Link.displayName = 'Link';

Link.defaultProps = {
  blacklist,
  fontWeight: 'bold',
};

export default Link;
