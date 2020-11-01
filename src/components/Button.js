import React from 'react';
import { Button } from "@chakra-ui/core";

import Link from './Link'

const ReButton = ({ href, ...props }) => {
  if (href) return <Button as={p => <Link {...p} href={href} />} {...props} />
  return <Button {...props} />
}

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
