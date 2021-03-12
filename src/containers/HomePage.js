import React from 'react'
import { FaThumbsUp, FaHandPeace } from 'react-icons/fa';
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
import Layout from './Layout'

import useResponsive from '../contexts/mediaQuery/useResponsive'

const HomePage = () => {
  const { isMobile } = useResponsive()

  return (
    <Layout>
      <FullpageVerticalCenter>
        <Container py={responsive(0, '2em')}>
          <Flex alignItems="center">
            <Text color={isMobile ? 'danger' : 'black'} fontSize={responsive('1em', '1.5em')}>
              Re-lab UI Starter, Based On Chakra Ui
            </Text>
            <Circle size="2em" bg="primary" color="white" mx="1em">
              <FaThumbsUp />
            </Circle>
          </Flex>
          <Counter />
          <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={16 / 9} />
          <Box mx="-1em">
            <Button m="0.5em" rightIcon={FaHandPeace}>範例Button</Button>
            <Button.Secondary m="0.5em" isDisabled>不可點</Button.Secondary>
          </Box>
        </Container>
      </FullpageVerticalCenter>
    </Layout>
  )
}

export default HomePage
