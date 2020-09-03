import React from 'react';

import { Link as UiLink } from "@chakra-ui/core";
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ button, to, ...props }) => {
  if (to) {
    return (
      <UiLink
        as={RouterLink}
        to={to}
        { ...props }
      />
    )
  }
  return (
    <UiLink
      target="_blank"
      { ...props }
    />
  );
};


Link.displayName = 'Link';

export default Link
