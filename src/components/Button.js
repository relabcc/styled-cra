import React from 'react';
import styled, { css } from 'styled-components';
import {
  typography,
  space,
  color,
  layout,
  border,
  borderRadius,
  position,
} from 'styled-system';
import themeGet from '@styled-system/theme-get';
import shouldForwardProp from '@styled-system/should-forward-prop'

import Box from './Box';

import { customColor } from './utils/getColor';
import isToAs from './utils/isToAs'

const active = css`
  ${customColor('hoverColor')};
  ${customColor('hoverBg', 'backgroundColor')};
  ${customColor('hoverBorder', 'borderColor')};
`;

const ButtonBase = styled.button.withConfig({ shouldForwardProp })`
  padding: 0;
  border: none;
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  ${typography}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${border}
  ${borderRadius}
  appearance: none;
  transition: all ${themeGet('duration', 250)}ms;
  cursor: pointer;
  &:hover,
  &:focus {
    ${props => !props.disabled && active}
    outline: none;
  }
  ${props => props.active && !props.disabled && active}
  ${props =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const InButtonSpan = props => <Box as="span" {...props} />;

const Button = isToAs(({
  leftIcon,
  rightIcon,
  iconSpacing,
  iconsSize,
  children,
  verticalAlign,
  ...props
}) => (
  <ButtonBase {...props}>
    {leftIcon ? (
      <Box as={leftIcon} mr={iconSpacing} verticalAlign={verticalAlign} fontSize={iconsSize} />
    ) : null}
    <InButtonSpan verticalAlign={verticalAlign}>{children}</InButtonSpan>
    {rightIcon ? (
      <Box as={rightIcon} ml={iconSpacing} verticalAlign={verticalAlign} fontSize={iconsSize} />
    ) : null}
  </ButtonBase>
));

Button.defaultProps = {
  border: '2px solid',
  borderColor: 'primary',
  bg: 'primary',
  color: 'white',
  hoverColor: 'white',
  hoverBg: 'primaryHover',
  hoverBorder: 'primaryHover',
  px: '1.5em',
  py: '0.75em',
  fontWeight: 'bold',
  iconSpacing: '0.25em',
  borderRadius: '0.25em',
  display: 'inline-block',
  verticalAlign: 'middle',
  iconsSize: '1.25em',
};

Button.displayName = 'Button';

Button.Danger = props => (
  <Button
    bg="danger"
    borderColor="danger"
    hoverBg="dangerHover"
    hoverBorder="dangerHover"
    {...props}
  />
);

Button.Secondary = props => (
  <Button
    bg="secondary"
    border="2px solid"
    borderColor="secondary"
    hoverBg="secondaryHover"
    hoverBorder="secondaryHover"
    {...props}
  />
);

Button.Outline = props => (
  <Button
    border="2px solid"
    borderColor="primary"
    bg="transparent"
    color="primary"
    hoverColor="white"
    {...props}
  />
);

Button.Outline.Danger = props => (
  <Button.Danger
    border="2px solid"
    borderColor="danger"
    bg="transparent"
    color="danger"
    hoverColor="white"
    {...props}
  />
);

Button.Transparent = props => (
  <Button
    border="1px solid transparent"
    bg="transparent"
    color="text"
    hoverBorder="primary"
    {...props}
  />
);

export default Button;
