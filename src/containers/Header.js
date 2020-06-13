import React from 'react'
import Box from '../components/Box';
import Flex from '../components/Flex';
import Text from '../components/Text';

const Header = ({ siteTitle, ...props }) => (
  <Flex
    position="fixed"
    bg="primary"
    top={0}
    left={0}
    right={0}
    alignItems="center"
    zOrder={2}
    {...props}
  >
    <Box px="1em" flex={1}>
      <Text.H1 color="white">
        {siteTitle}
      </Text.H1>
    </Box>
  </Flex>
)

export default Header
