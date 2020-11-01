import React from 'react';
import { Button } from "@chakra-ui/core";

import Link from '../i18n/Link'

const ReButton = ({ href, to, ...props }) => {
  if (href || to) return <Button as={p => <Link {...p} to={to} href={href} />} {...props} />
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
