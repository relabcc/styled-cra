import React from 'react';
import { Button } from "@chakra-ui/react";

import Link from './Link'

const ReButton = ({ href, to, ...props }) => {
  if (href || to) return <Button as={p => <Link {...p} href={href} to={to} />} {...props} />
  return <Button {...props} />
}

ReButton.defaultProps = {
  colorScheme: 'blue',
}

ReButton.Secondary = props => (
  <ReButton colorScheme="green" {...props} />
)

ReButton.Danger = props => (
  <ReButton colorScheme="red" {...props} />
)

export default ReButton
