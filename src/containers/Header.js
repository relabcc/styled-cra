import React from 'react'
import { Heading } from "@chakra-ui/react";

import Box from '../components/Box';
import Flex from '../components/Flex';

import Language from './Language'

const Header = ({ siteTitle, ...props }) => (
  <Flex
    position="fixed"
    bg="primary"
    top={0}
    left={0}
    right={0}
    alignItems="center"
    zIndex="docked"
    px="1em"
    {...props}
  >
    <Box flex={1}>
      <Heading as="h1" color="white">
        {siteTitle}
      </Heading>
    </Box>
    <Language />
  </Flex>
)

export default Header
