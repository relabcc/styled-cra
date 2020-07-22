import React from 'react'
import Box from '../components/Box';
import Flex from '../components/Flex';
import Text from '../components/Text';

import Language from './Language'

const Header = ({ siteTitle, ...props }) => (
  <Flex
    position="fixed"
    bg="primary"
    top={0}
    left={0}
    right={0}
    alignItems="center"
    zOrder={2}
    px="1em"
    {...props}
  >
    <Box flex={1}>
      <Text.H1 color="white">
        {siteTitle}
      </Text.H1>
    </Box>
    <Language />
  </Flex>
)

export default Header
