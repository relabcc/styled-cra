import React from 'react'
import { FaThumbsUp, FaLock } from 'react-icons/fa';
import { Circle } from '@chakra-ui/react';

import Container from '../components/Container'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import FullpageVerticalCenter from '../components/FullpageVerticalCenter'
import { responsive } from '../components/ThemeProvider/theme';

import Counter from './Counter'

import useResponsive from '../contexts/mediaQuery/useResponsive'

const HomePage = () => {
  const { isMobile } = useResponsive()
  return (
    <FullpageVerticalCenter>
      <Container py={responsive(0, '2em')}>
        <Flex alignItems="center">
          <Text color={isMobile ? 'danger' : 'black'} fontSize={responsive('1em', '1.5em')}>
          Styled Components + Styled System 超方便
          </Text>
          <Circle size="2em" bg="primary" color="white" mx="1em">
            <FaThumbsUp />
          </Circle>
        </Flex>
        <Counter />
        <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={16 / 9} />
        <Box mx="-1em">
          <Button m="0.5em" to="/admin" rightIcon={<FaLock />}>Admin</Button>
          <Button.Secondary m="0.5em" disabled>不可點</Button.Secondary>
        </Box>
      </Container>
    </FullpageVerticalCenter>
  )
}

export default HomePage
