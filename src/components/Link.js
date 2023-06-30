import { Link as ChLink, forwardRef } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const sx = {
  '&.chakra-button:hover': {
    textDecoration: 'none',
  },
};

const Link = forwardRef(({ href, isExternal, ...props }, ref) => {
  if (isExternal) {
    return <ChLink href={href} ref={ref} isExternal sx={sx} {...props} />;
  }
  if (!href) return <ChLink href={href} ref={ref} sx={sx} {...props} />;
  return <ChLink as={RouterLink} to={href} ref={ref} sx={sx} {...props} />;
});

Link.displayName = 'Link';

export default Link;
