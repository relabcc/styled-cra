import React from 'react';
import { Button } from "@chakra-ui/core";
import styled from '@emotion/styled'

const ReButton = styled(Button)`
`;

ReButton.defaultProps = {
  variantColor: 'blue'
}

ReButton.Secondary = props => (
  <ReButton variantColor="green" {...props} />
)

ReButton.Danger = props => (
  <ReButton variantColor="red" {...props} />
)

export default ReButton
