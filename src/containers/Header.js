import React from 'react'
import { Heading } from "@chakra-ui/react";

import Box from '../components/Box';
import Flex from '../components/Flex';

const Header = ({ siteTitle, ...props }) => (
  <Flex
    position="fixed"
    bg="primary"
    top={0}
    left={0}
    right={0}
    alignItems="center"
    zIndex="docked"
    {...props}
  >
    <Box px="1em" flex={1}>
      <Heading as="h1" color="white">
        {siteTitle}
      </Heading>
    </Box>
  </Flex>
)

export default Header
