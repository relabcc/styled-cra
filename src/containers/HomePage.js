import React from 'react';
import { FaThumbsUp, FaHandPeace } from 'react-icons/fa';
import { ButtonGroup, Circle, Container, Flex, Text } from '@chakra-ui/react';

import BackgroundImage from 'components/BackgroundImage';
import Button from 'components/Button';

const HomePage = () => {
  return (
    <Container py={{ base: 4, md: 8 }} maxW="container.lg">
      <Flex alignItems="center">
        <Text fontSize={{ base: '1em', md: '1.5em' }}>
          RE:LAB UI Starter, Based On Chakra Ui
        </Text>
        <Circle size="2em" bg="primary" color="white" mx="1em">
          <FaThumbsUp />
        </Circle>
      </Flex>
      <BackgroundImage
        my="2em"
        src="https://loremflickr.com/1920/1080?random=1"
        ratio={16 / 9}
      />
      <ButtonGroup spacing={4}>
        <Button rightIcon={<FaHandPeace />} href="/about">
          About
        </Button>
        <Button.Secondary isDisabled>不可點</Button.Secondary>
      </ButtonGroup>
      <BackgroundImage
        my="2em"
        src="https://loremflickr.com/1920/1080?random=2"
        ratio={16 / 9}
      />
    </Container>
  );
};

export default HomePage;
