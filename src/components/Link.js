import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Link as UiLink } from "@chakra-ui/react";
import styled from '@emotion/styled'

const Link = forwardRef(({ button, to, ...props }, ref) => {
  if (to) {
    return (
      <UiLink
        as={RouterLink}
        to={to}
        {...props}
        ref={ref}
      />
    )
  }
  return (
    <UiLink
      target="_blank"
      {...props}
      ref={ref}
    />
  );
});

Link.displayName = 'Link';

export default styled(Link)``
