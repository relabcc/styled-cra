import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

const Circle = forwardRef(({ children, border, borderColor, bg, as, ...props }, ref) => (
  <Box {...props} ref={ref}>
    <Box position="relative" pt="100%">
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        width="100%"
        borderRadius="50%"
        border={border}
        borderColor={borderColor}
        bg={bg}
        as={as}
      >
        <Box
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          position="absolute"
          lineHeight="0"
        >
          {children}
        </Box>
      </Box>
    </Box>
  </Box>
));

Circle.propTypes = {
  children: PropTypes.node,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  bg: PropTypes.string,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Circle.displayName = 'Circle';

export default Circle;
