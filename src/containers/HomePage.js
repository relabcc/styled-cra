import React from 'react'
import { FaThumbsUp, FaLock } from 'react-icons/fa';

import Container from '../components/Container'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Circle from '../components/Circle'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Link from '../components/Link'
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
          <Text color={isMobile ? 'red' : 'black'} fontSize={responsive('1em', '1.5em')}>
          Styled Components + Styled System 超方便
          </Text>
          <Circle width="2em" bg="blue" color="white" display="inline-block" mx="1em" verticalAlign="middle">
            <FaThumbsUp />
          </Circle>
        </Flex>
        <Counter />
        <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
        <Box mx="-1em">
          <Button is={Link} m="0.5em" to="/admin" rightIcon={FaLock}>Admin</Button>
          <Button.Secondary m="0.5em" disabled>不可點</Button.Secondary>
        </Box>
      </Container>
    </FullpageVerticalCenter>
  )
}

export default HomePage
