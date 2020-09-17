import React from 'react';
import { Box } from "@chakra-ui/core";

export default Box

Box.Inline = (props) => <Box as="span" display="inline-block" verticalAlign="middle" {...props} />;
Box.Absolute = (props) => <Box position="absolute" {...props} />;
Box.FullAbs = (props) => <Box.Absolute top="0" left="0" right="0" bottom="0" {...props} />;
Box.Relative = (props) => <Box position="relative" {...props} />;
Box.Fixed = (props) => <Box position="fixed" {...props} />;
Box.Invisible = (props) => <Box.Absolute width="0" height="0" overflow="hidden" opacity="0" {...props} />;
