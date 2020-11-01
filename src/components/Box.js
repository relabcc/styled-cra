import React, { forwardRef } from 'react';
import { Box } from "@chakra-ui/core";
import styled from '@emotion/styled'

const ReBox = styled(Box)``

export default ReBox

ReBox.Inline = forwardRef((props, ref) => <ReBox as="span" display="inline-block" verticalAlign="middle" {...props} ref={ref} />);
ReBox.Absolute = forwardRef((props, ref) => <ReBox position="absolute" {...props} ref={ref} />);
ReBox.FullAbs = forwardRef((props, ref) => <ReBox.Absolute top="0" left="0" right="0" bottom="0" {...props} ref={ref} />)
ReBox.Relative = forwardRef((props, ref) => <ReBox position="relative" {...props} ref={ref} />)
ReBox.Fixed = forwardRef((props, ref) => <ReBox position="fixed" {...props} ref={ref} />)
ReBox.Invisible = forwardRef((props, ref) => <ReBox.Absolute width="0" height="0" overflow="hidden" opacity="0" {...props} ref={ref} />)
