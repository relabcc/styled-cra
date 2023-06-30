import React from 'react';
import { Heading, Box, Flex } from '@chakra-ui/react';

const Header = ({ siteTitle, ...props }) => (
  <Flex
    position="fixed"
    bg="primary"
    top={0}
    left={0}
    right={0}
    alignItems="center"
    zIndex="docked"
    as="header"
    {...props}
  >
    <Box px="1em" flex={1}>
      <Heading as="h1" color="white">
        {siteTitle}
      </Heading>
    </Box>
  </Flex>
);

export default Header;
