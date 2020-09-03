import React from 'react';
import { Text } from "@chakra-ui/core";
import range from 'lodash/range';

Text.Inline = (props) => <Text as="span" {...props} />;
Text.Bold = (props) => <Text fontWeight="bold" {...props} />;
Text.Thin = (props) => <Text fontWeight="200" {...props} />;

range(1, 7).forEach((key) => {
  Text[`H${key}`] = (props) => (
    <Text
      as={`h${key}`}
      fontSize={`${5 - key}xl`}
      {...props}
    />
  );
});

export default Text
