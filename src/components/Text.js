import React, { forwardRef } from 'react';
import { Text } from "@chakra-ui/core";
import range from 'lodash/range';
import styled from '@emotion/styled'

const ReText = styled(Text)``

ReText.Inline = forwardRef((props, ref) => <ReText as="span" {...props} ref={ref} />);
ReText.Bold = forwardRef((props, ref) => <ReText fontWeight="bold" {...props} ref={ref} />);
ReText.Thin = forwardRef((props, ref) => <ReText fontWeight="200" {...props} ref={ref} />);

range(1, 7).forEach((key) => {
  ReText[`H${key}`] = forwardRef((props, ref) => (
    <ReText
      as={`h${key}`}
      fontSize={`${5 - key}xl`}
      {...props}
      ref={ref}
    />
  ));
});

export default Text
