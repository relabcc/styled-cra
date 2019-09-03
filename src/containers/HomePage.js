import React from 'react'
import { FaThumbsUp, FaHandPeace } from 'react-icons/fa';

import Container from '../components/Container'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Circle from '../components/Circle'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import VerticalCenter from '../components/VerticalCenter'
import { responsive } from '../components/ThemeProvider/theme';

import Counter from './Counter'
import Layout from './Layout'

import withResponsive from '../hoc/withResponsive'

const HomePage = ({ browser }) => (
  <Layout>
    <VerticalCenter>
      <Container py={responsive(0, '2em')}>
        <Flex alignItems="center">
          <Text>
          Styled Components + Styled System 超方便
          </Text>
          <Circle width="2em" bg="blue" color="white" display="inline-block" mx="1em" verticalAlign="middle">
            <FaThumbsUp />
          </Circle>
        </Flex>
        <Text>Current Breakpoint: {browser.mediaType}</Text>
        <Counter />
        <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
        <Box mx="-1em">
          <Button m="0.5em" rightIcon={FaHandPeace}>範例Button</Button>
          <Button.secondary m="0.5em" disabled>不可點</Button.secondary>
        </Box>
      </Container>
    </VerticalCenter>
  </Layout>
)

export default withResponsive(HomePage)
