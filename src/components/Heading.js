import React from 'react'
import { Heading } from '@chakra-ui/core'
import range from 'lodash/range'

Heading.defaultProps = {
  // fontWeight: 400,
}

range(1, 7).forEach((key) => {
  Heading[`H${key}`] = (props) => (
    <Heading
      as={`h${key}`}
      fontSize={`${5 - key}xl`}
      {...props}
    />
  );
});

export default Heading
