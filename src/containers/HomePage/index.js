import React from 'react'
import { FaThumbsUp, FaHandPeace } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Circle from '../../components/Circle'
import Text from '../../components/Text'
import BackgroundImage from '../../components/BackgroundImage'
import Button from '../../components/Button'
import FullpageVerticalCenter from '../../components/FullpageVerticalCenter'
import { responsive } from '../../components/ThemeProvider/theme';

import useResponsive from '../../contexts/mediaQuery/useResponsive'

import Counter from '../Counter'
import messages from './messages'

const HomePage = () => {
  const { isMobile } = useResponsive()
  return (
    <FullpageVerticalCenter>
      <Container py={responsive(0, '2em')}>
        <Flex alignItems="center">
          <Text color={isMobile ? 'red' : 'black'} fontSize={responsive('1em', '1.5em')}>
            <FormattedMessage {...messages.header} />
          </Text>
          <Circle width="2em" bg="blue" color="white" display="inline-block" mx="1em" verticalAlign="middle">
            <FaThumbsUp />
          </Circle>
        </Flex>
        <Counter />
        <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
        <Box mx="-1em">
          <Button m="0.5em" rightIcon={FaHandPeace}><FormattedMessage {...messages.good} /></Button>
          <Button.Secondary m="0.5em" disabled><FormattedMessage {...messages.bad} /></Button.Secondary>
        </Box>
      </Container>
    </FullpageVerticalCenter>
  )
}

export default HomePage
