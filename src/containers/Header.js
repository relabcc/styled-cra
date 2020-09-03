import React from 'react'
import { Heading } from "@chakra-ui/core";

import Box from '../components/Box';
import Flex from '../components/Flex';
import Link from '../components/Link';

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
        <Link to="/">
          {siteTitle}
        </Link>
      </Heading>
    </Box>
  </Flex>
)

export default Header
